import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import { NavMenu } from '@/components/header/navigation-menu/navigation-menu'

type BlankPageProps = {
    children: React.ReactNode
}

const nav: NavMenu = [
    { title: 'About', href: '/#about' },
    { title: 'Experience', href: '/#experience' },
    { title: 'Projects', href: '/#projects' },
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
                href: '/recipes/recipe-1',
                description:
                    'A delicious golden yellow crepe with a hint of Matcha!',
            },
            {
                title: 'Recipe 2',
                href: '/recipes/recipe-2',
                description:
                    'A delicious golden yellow crepe with a hint of Matcha!',
            },
        ],
        // TODO: add another field that creates a "more recipes..." at the bottom that you could click
    },
]

const BlankPage = (props: BlankPageProps) => {
    return (
        <>
            <Header nav={nav} />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default BlankPage
