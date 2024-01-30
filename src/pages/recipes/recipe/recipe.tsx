import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlankPage from '@/page-templates/blank-page/blank-page'
import { ContentResponse, RecipeSchema, getRecipe, getRecipes } from '@/api/api'
import { getSlugPath } from '@/router/router'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { parseContentfulImageUrl } from '@/utils/utils'

// TODO: make the story an accordion, everything else should be fully visible
// TODO: add columns to make this look nicer
const Recipe = (): JSX.Element => {
    const { slug } = useParams()
    const [recipe, setRecipe] = useState<ContentResponse<RecipeSchema>>()

    useEffect(() => {
        //TODO: maybe i can put this on the router so that we don't get the flicker of the render
        const retrieveRecipe = async () => {
            const response = await getRecipes()
            const foundRecipe = response.data.content.find((recipe) => {
                return slug === getSlugPath(recipe.fields.title)
            })
            if (foundRecipe === undefined) return
            const recipe = await getRecipe(foundRecipe.sys.id)
            recipe && setRecipe(recipe.data.content)
        }
        retrieveRecipe()
    }, [])

    // TODO: should probably refactor this out to a contentful specific folder
    const getRenderOptions = () => {
        return {
            renderNode: {
                [BLOCKS.PARAGRAPH]: (
                    _node: unknown,
                    children: React.ReactNode
                ) => <p className="text-left">{children}</p>,
            },
        }
    }

    return (
        <BlankPage>
            {recipe === undefined ? (
                <>There is no recipe for that...</>
            ) : (
                <div className="text-left container my-24">
                    <h2 className="mb-12 text-center text-3xl font-bold">
                        {recipe.fields.title}
                    </h2>
                    <div className="flex justify-center">
                        <img
                            src={parseContentfulImageUrl(
                                recipe.fields.thumbnail.fields.file.url
                            )}
                            alt="recipe_pic"
                            className="h-[400px] w-[400px]"
                        />
                    </div>
                    {recipe.fields.description}
                    {/* TODO: create checkbox for ingredients? with cache that expires every 24 hours? */}
                    {recipe.fields.ingredients}
                    {/* cooking instructions */}
                    {documentToReactComponents(
                        recipe.fields.cookingSteps,
                        getRenderOptions()
                    )}
                </div>
            )}
        </BlankPage>
    )
}

export default Recipe
