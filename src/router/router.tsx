import Home from 'pages/home/home'
import Recipes from 'pages/recipes/recipes'

const routerPaths = [
    {
        path: '',
        element: <Home />,
    },
    {
        path: '/recipes',
        element: <Recipes />,
    },
]

export default routerPaths
