import { RecipeResponse } from '@/api/api'
import { parseContentfulImageUrl } from '@/utils/utils'
import moment from 'moment'

type Props = {
    recipes: RecipeResponse
}

const RecipesCatalog = (props: Props): JSX.Element => {
    if (props.recipes.length === 0) {
        return (
            <div>Sorry, I couldn't find the recipe you're looking for...</div>
        )
    }

    return (
        <section>
            <div className="grid gap-6 md:grid-cols-3">
                {props.recipes.map((recipe) => {
                    const imageUrl = parseContentfulImageUrl(
                        recipe.fields.thumbnail.fields.file.url
                    )
                    const title = recipe.fields.title
                    const formattedDate = moment(recipe.sys.createdAt).format(
                        'MMM D, YYYY'
                    )
                    return (
                        <div
                            className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 md:h-[220px]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            <img
                                src={imageUrl}
                                className="h-full  w-full align-middle transition duration-300 ease-linear object-cover"
                            />
                            <a href={`/recipes/${recipe.sys.id}`}>
                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                    <div className="flex h-full items-end justify-start">
                                        <div className="m-6 text-white text-left">
                                            <h5 className="mb-3 text-lg font-bold">
                                                {title}
                                            </h5>
                                            <p>
                                                <small>
                                                    Published{' '}
                                                    <u>{formattedDate}</u>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default RecipesCatalog
