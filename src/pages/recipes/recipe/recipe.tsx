import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Maintenance from '@/components/maintenance/maintenance'
import BlankPage from '@/page-templates/blank-page/blank-page'
import { getRecipe } from '@/api/api'

// TODO: make the story an accordion, everything else should be fully visible
const Recipe = (): JSX.Element => {
    const { recipeId } = useParams()

    useEffect(() => {
        const retrieveRecipe = async () => {
            if (recipeId) {
                await getRecipe(recipeId)
            }
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
