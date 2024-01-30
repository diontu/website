import Error404 from '@/pages/404/Error404'
import Home from '@/pages/home/home'
import Recipes from '@/pages/recipes/recipes'
import Recipe from '@/pages/recipes/recipe/recipe'
import { Navigate, RouteObject } from 'react-router-dom'
import { getRecipe, getRecipes } from '@/api/api'

const routerPaths: RouteObject[] = [
    {
        path: '*',
        element: <Navigate to="/404" replace />,
    },
    {
        path: '/404',
        element: <Error404 />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/recipes',
        element: <Recipes />,
    },
    {
        path: '/recipes/:slug',
        element: <Recipe />,
        loader: async ({ params }) => {
            const slug = params.slug
            const response = await getRecipes()
            const foundRecipe = response.data.content.find((recipe) => {
                return slug === getSlugPath(recipe.fields.title)
            })
            if (foundRecipe === undefined) return
            const recipe = await getRecipe(foundRecipe.sys.id)
            return recipe.data.content
        },
    },
]

export const getSlugPath = (title: string): string => {
    return title.toLowerCase().replace(' ', '-')
}

export default routerPaths
