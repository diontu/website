import { useEffect, useState, useRef } from 'react'
import Input from '@/components/input/input'
import BlankPage from '@/page-templates/blank-page/blank-page'
import RecipesCatalog from '@/pages/recipes/recipes-catalog'
import { getRecipes } from '@/api/api'

// types
import type { RecipeResponse } from '@/api/api'
import { debounce } from '@/utils/utils'

const Recipes = (): JSX.Element => {
    const [searchWord, setSearchWord] = useState('')
    const [recipes, setRecipes] = useState<RecipeResponse>([])
    const debouncedSearchWord = useRef(debounce(setSearchWord))

    useEffect(() => {
        const retrieveRecipes = async () => {
            const response = await getRecipes()
            setRecipes(response.data.content)
        }
        retrieveRecipes()
    }, [])

    const handleSearchOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const searchValue = event.target.value
        debouncedSearchWord.current(searchValue.toLowerCase())
    }

    const renderRecipes = (): JSX.Element => {
        if (recipes === undefined) {
            // TODO: create some animation that is entertaining to keep the person on the page during the cold start.
            return (
                <div>
                    The recipes are on their way back from the grocery store...
                </div>
            )
        }
        let recipesToShow = recipes
        if (searchWord !== '') {
            recipesToShow = recipes.filter((recipe) =>
                recipe.fields.title.toLowerCase().includes(searchWord)
            )
        }
        return <RecipesCatalog recipes={recipesToShow} />
    }

    return (
        <BlankPage>
            <div className="container my-24">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Recipes
                </h2>
                <div className="my-12">
                    <p className="my-4">
                        Welcome to my world of recipes! I'm a big fan of eating
                        food, but I also like to cook it as well. The thing
                        is... I tend to forget a lot of the recipes I've cooked
                        so that's why I made this page. This page all of the
                        recipes I've cooked.
                    </p>
                    <p className="my-4">
                        My favourite cuisine to eat/cook is Vietnamese, but
                        would love to try recipes in other cuisines too! If you
                        have a recipe that you love and would like to share,
                        please don't hesitate to share it with me on Twitter{' '}
                        <a
                            className="underline hover:no-underline"
                            href="https://twitter.com/DionTu3"
                        >
                            @DionTu3
                        </a>{' '}
                        and I will consider making it and adding to the recipes
                        here!
                    </p>
                </div>

                <div className="my-12">
                    <div className="mb-8">
                        <Input
                            placeholder="Search recipe here..."
                            onChange={handleSearchOnChange}
                        />
                    </div>
                    {renderRecipes()}
                </div>
            </div>
        </BlankPage>
    )
}

export default Recipes
