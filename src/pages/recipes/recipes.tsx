import BlankPage from '@/page-templates/blank-page/blank-page'
import RecipesCatalog from '@/pages/recipes/recipes-catalog'

const Recipes = (): JSX.Element => {
    return (
        <BlankPage>
            <div className="container my-24 mx-auto md:px-6">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Latest Recipes
                </h2>
                <p>
                    Welcome to my world of recipes! I'm a big fan of eating
                    food, but I also like to cook it as well. I tend to forgot a
                    lot of the recipes I've cooked quite often so that's why I
                    made this page. My favourite cuisines to eat/cook is
                    Vietnamese, but would love to try new recipes too! If you
                    have a recipe that you love and would like to share, please
                    don't hesitate to with me{' '}
                    <a href="https://twitter.com/DionTu3">@DionTu3</a> and I
                    will consider making it and adding to the recipes here!
                </p>
                <RecipesCatalog />
            </div>
        </BlankPage>
    )
}

export default Recipes
