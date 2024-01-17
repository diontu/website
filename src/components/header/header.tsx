import { useNavigate } from 'react-router-dom'
import Navigation, {
    NavMenu,
} from '@/components/header/navigation-menu/navigation-menu'
import reactLogo from '@/assets/react.svg'

const nav: NavMenu = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    // TODO: make the recipes dynamic
    {
        title: 'Recipes',
        main: {
            title: 'Recipes Blog',
            description:
                "See a catalog of the recipes of the foods I've cooked",
            href: '/recipes',
        },
        menu: [
            {
                title: 'Recipe 1',
                href: 'something',
                description:
                    'A delicious golden yellow crepe with a hint of Matcha!',
            },
            {
                title: 'Recipe 2',
                href: 'something',
                description:
                    'A delicious golden yellow crepe with a hint of Matcha!',
            },
        ],
        // TODO: add another field that creates a "more recipes..." at the bottom that you could click
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
