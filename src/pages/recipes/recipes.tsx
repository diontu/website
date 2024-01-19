import BlankPage from '@/page-templates/blank-page/blank-page'
import RecipesCatalog from '@/pages/recipes/recipes-catalog'
import CardSection from '@/pages/sections/card-section'

const Recipes = (): JSX.Element => {
    return (
        <BlankPage>
            <div className="container my-24 mx-auto md:px-6">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Recipes
                </h2>
                <div className="my-12">
                    <p className="my-4">
                        Welcome to my world of recipes! I'm a big fan of eating
                        food, but I also like to cook it as well. The thing
                        is... I tend to forgot a lot of the recipes I've cooked
                        so that's why I made this page. This page contains my
                        latest recipes and the favourite recipes I've cooked.
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
                <CardSection title="Latest Recipes">
                    <RecipesCatalog />
                </CardSection>
                <CardSection title="Top 3 Favourite Recipes">
                    <RecipesCatalog />
                </CardSection>
            </div>
        </BlankPage>
    )
}

export default Recipes
