import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/header/navigation-menu/navigation-menu'
import reactLogo from '@/assets/react.svg'

const nav = [
    { title: 'About', href: 'hello' },
    { title: 'Projects', href: 'hello' },
    // TODO: make the recipes dynamic
    {
        title: 'Recipes',
        menu: [
            {
                title: 'Recipe 1',
                href: 'something',
                description:
                    'A delicious golden yellow crepe with a hint of Matcha!',
            },
        ],
    },
]

const Header = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className="flex w-full my-3">
            <img
                src={reactLogo}
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate('/')}
            />
            <Navigation nav={nav} />
        </div>
    )
}

export default Header
