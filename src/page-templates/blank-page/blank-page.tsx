import { useEffect, useState } from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import { NavMenu } from '@/components/header/navigation-menu/navigation-menu'
import { ContentResponseArray, RecipeSchema, getRecipes } from '@/api/api'
import { getSlugPath } from '@/router/router'

type BlankPageProps = {
    children: React.ReactNode
}

const BlankPage = (props: BlankPageProps) => {
    const [nav, setNav] = useState<NavMenu>([
        { title: 'About', href: '/#about' },
        { title: 'Experience', href: '/#experience' },
        { title: 'Projects', href: '/#projects' },
        {
            title: 'Recipes',
            main: {
                title: 'Recipes Blog',
                description:
                    "See a catalog of the recipes of the foods I've cooked",
                href: '/recipes',
            },
            menu: [],
        },
    ])

    const [recipes, setRecipes] = useState<ContentResponseArray<RecipeSchema>>()
    useEffect(() => {
        const retrieveRecipes = async (): Promise<void> => {
            const response = await getRecipes(2)
            response && setRecipes(response.data.content)
        }
        retrieveRecipes()
    }, [])
    useEffect(() => {
        const recipesNav = nav.find(
            (menu) => menu.title.toLowerCase() === 'recipes'
        )
        if (recipesNav === undefined || recipes === undefined) return
        recipesNav.menu = recipes.map((recipe) => ({
            title: recipe.fields.title,
            href: `/recipes/${getSlugPath(recipe.fields.title)}`,
            description: recipe.fields.description ?? '',
        }))
        setNav([...nav])
    }, [recipes])

    return (
        <>
            <Header nav={nav} />
            <main className="px-4 md:px-12">{props.children}</main>
            <Footer />
        </>
    )
}

export default BlankPage
