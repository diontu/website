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
            {/* todo: modify this with my existing projects */}
            <CardSection id="projects" title="Projects">
                <div className="text-left">
                    <p className="mb-4">
                        Introduction on me working on projects
                    </p>
                    <section className="mt-16 text-center">
                        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                            <div className="mb-6 lg:mb-0">
                                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div className="flex">
                                        <div
                                            className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                                                className="w-full"
                                            />
                                            <a href="#!">
                                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-4 text-lg font-bold">
                                            White city
                                        </h5>
                                        <p className="mb-6">
                                            Ut pretium ultricies dignissim. Sed
                                            sit amet mi eget urna placerat
                                            vulputate. Ut vulputate est non quam
                                            dignissim elementum. Donec a
                                            ullamcorper diam.
                                        </p>
                                        <a
                                            href="#!"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 lg:mb-0">
                                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div className="flex">
                                        <div
                                            className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                                                className="w-full"
                                            />
                                            <a href="#!">
                                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-4 text-lg font-bold">
                                            A lonely bench
                                        </h5>
                                        <p className="mb-6">
                                            Suspendisse in volutpat massa. Nulla
                                            facilisi. Sed aliquet diam orci, nec
                                            ornare metus semper sed. Integer
                                            volutpat ornare erat sit amet
                                            rutrum.
                                        </p>
                                        <a
                                            href="#!"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-0">
                                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div className="flex">
                                        <div
                                            className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                                                className="w-full"
                                            />
                                            <a href="#!">
                                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-4 text-lg font-bold">
                                            Happy snow
                                        </h5>
                                        <p className="mb-6">
                                            Curabitur tristique, mi a mollis
                                            sagittis, metus felis mattis arcu,
                                            non vehicula nisl dui quis diam.
                                            Mauris ut risus eget massa volutpat
                                            feugiat. Donec.
                                        </p>
                                        <a
                                            href="#!"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        >
                                            Read more
                                        </a>
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
