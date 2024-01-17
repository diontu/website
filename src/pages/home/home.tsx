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
                        want to share, please share it with me through X (this
                        is still known as Twitter to me) @DionTu3.
                    </p>
                </div>
            </CardSection>
            <CardSection id="experience" title="Experience">
                <div className="text-left">
                    <p className="mb-4">My experience at AA</p>
                    <p className="mb-4">My experience at ScotiaBank</p>
                    <p>My experience at TD</p>
                </div>
            </CardSection>
            <CardSection
                id="projects"
                title="Projects"
                description="These are some of the personal projects I have worked
                        on"
            >
                <div className="text-left">
                    <section className="mt-16 text-center">
                        <div className="grid gap-6 lg:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 lg:mb-0">
                                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div className="flex">
                                        <a href="/">
                                            <div
                                                className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                            >
                                                <img
                                                    src="/website.png"
                                                    className="w-full h-[300px] object-cover transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-4 text-lg font-bold">
                                            This Website
                                        </h5>
                                        <p className="mb-6">
                                            This website is built using many of
                                            the more recent development tools
                                            such as Vite and Tailwind CSS. I
                                            will constantly be updating this
                                            website with new development tools I
                                            find to ultimately my increase
                                            productivity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-0">
                                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div className="flex">
                                        <a
                                            target="_blank"
                                            href="https://www.youtube.com/@notasoftwareengineer"
                                        >
                                            <div
                                                className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                            >
                                                <img
                                                    src="/youtube_channel.png"
                                                    className="w-full h-[300px] object-cover transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-4 text-lg font-bold">
                                            YouTube Channel
                                        </h5>
                                        <p className="mb-6">
                                            I've started a YouTube channel to
                                            showcase my journey in my career.
                                            Any lessons I've learned is
                                            essentially (or will be) imparted
                                            into this channel to educate others
                                            what it's like to be in this field.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
