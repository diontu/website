import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Maintenance from '@/components/maintenance/maintenance'
import BlankPage from '@/page-templates/blank-page/blank-page'
import { getRecipe, getRecipes } from '@/api/api'
import { getSlugPath } from '@/router/router'

// TODO: make the story an accordion, everything else should be fully visible
const Recipe = (): JSX.Element => {
    const { slug } = useParams()

    useEffect(() => {
        const retrieveRecipe = async () => {
            const response = await getRecipes()
            const foundRecipe = response.data.content.find((recipe) => {
                return slug === getSlugPath(recipe.fields.title)
            })
            if (foundRecipe === undefined) return
            await getRecipe(foundRecipe.sys.id)
        }
        retrieveRecipe()
    }, [])

    return (
        <BlankPage>
            <Maintenance />
        </BlankPage>
    )
}

export default Recipe
