import BlankPage from '@/page-templates/blank-page/blank-page'
import CardSection from '@/pages/sections/card-section'

const Home = (): JSX.Element => {
    return (
        <BlankPage>
            <CardSection id="about" title="Who am I?">
                <div className="text-left">
                    <p className="mb-4">
                        Hi, my name is Dion Tu and I'm a frontend developer.
                        I've worked in the banking industry that provided value
                        through corporate and commercial banking and have
                        transitioned to a smaller company that focuses on
                        delivering value to marketing agencies through their
                        SaaS product.
                    </p>
                    <p className="mb-4">
                        My expertise lies in technologies revolving around the
                        frontend, which includes React, TypeScript, RTK,
                        Node.js, HTML, CSS, Next.js, React Testing Library,
                        Playwright, and Jest. Other tools (not limited to
                        frontend) that I have worked with includes: PHP,
                        Laravel, Java, Spring, Docker, MySQL, PostgreSQL, and
                        MongoDB.
                    </p>
                    <p className="mb-4">
                        Being a frontend developer, I build and architect
                        frontend code to ensure seamless and responsive user
                        interfaces. Often, I work with product managers as well
                        as UI/UX designers to translate hi-fi designs to code.
                        I've also worked with backend developers to build new
                        endpoints and extend features on existing endpoints.
                        Throughout all the work I've done, I've dedicated my
                        craft to building frontend code that is maintainable and
                        extensible.
                    </p>
                    <p>
                        Lastly, I'm interested in improving. I'm not the best
                        and I don't claim to be. I focus my expertise on the
                        frontend, but would like to improve in all areas
                        (backend, UI/UX, and product decisions based on
                        metrics). If you have an interesting article/project you
                        want to share, please share it with me through X
                        @DionTu3.
                    </p>
                </div>
            </CardSection>
            <CardSection title='Why do I have a "Recipes" menu?'>
                <div className="text-left">
                    <p className="mb-4">
                        I have a passion for food. I love eating it, trying food
                        from different places and especially making it. I've
                        included a "Recipes" menu to showcase the food that I've
                        cooked and to reference it in case I forget the recipe.
                    </p>
                </div>
            </CardSection>
        </BlankPage>
    )
}

export default Home
