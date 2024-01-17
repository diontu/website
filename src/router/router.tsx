import Error404 from '@/pages/404/Error404'
import Home from '@/pages/home/home'
import Recipes from '@/pages/recipes/recipes'
import Recipe from '@/pages/recipes/recipe/recipe'
import { Navigate } from 'react-router-dom'

const routerPaths = [
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
        path: '/recipes/:id',
        element: <Recipe />,
    },
]

export default routerPaths
