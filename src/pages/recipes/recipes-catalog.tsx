// TODO: make Recipes Catalog more modularized. Ensure that I could use it for both my latest recipes and my favourite recipes
const RecipesCatalog = (): JSX.Element => {
    return (
        <section>
            <div className="grid gap-6 lg:grid-cols-3">
                <div
                    className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
                        className="w-full align-middle transition duration-300 ease-linear"
                    />
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-6 text-white">
                                    <h5 className="mb-3 text-lg font-bold">
                                        I miss the sun
                                    </h5>
                                    <p>
                                        <small>
                                            Published <u>13.01.2022</u> by Anna
                                            Maria Doe
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>

                <div
                    className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"
                        className="w-full align-middle transition duration-300 ease-linear"
                    />
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-6 text-white">
                                    <h5 className="mb-3 text-lg font-bold">
                                        Adventure in the desert
                                    </h5>
                                    <p>
                                        <small>
                                            Published <u>12.01.2022</u> by Mark
                                            Equel
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>

                <div
                    className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/045.jpg"
                        className="w-full align-middle transition duration-300 ease-linear"
                    />
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-6 text-white">
                                    <h5 className="mb-3 text-lg font-bold">
                                        Lonely mountain
                                    </h5>
                                    <p>
                                        <small>
                                            Published <u>10.01.2022</u> by Bilbo
                                            baggins
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>

                <div
                    className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/047.jpg"
                        className="w-full align-middle transition duration-300 ease-linear"
                    />
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-6 text-white">
                                    <h5 className="mb-3 text-lg font-bold">
                                        Let's go!
                                    </h5>
                                    <p>
                                        <small>
                                            Published <u>09.01.2022</u> by
                                            Halley Frank
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>

                <div
                    className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/028.jpg"
                        className="w-full align-middle transition duration-300 ease-linear"
                    />
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-6 text-white">
                                    <h5 className="mb-3 text-lg font-bold">
                                        A hut in the mountains
                                    </h5>
                                    <p>
                                        <small>
                                            Published <u>07.01.2022</u> by David
                                            Beak
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>

                <div
                    className="hover:scale-105 duration-500 relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/049.jpg"
                        className="w-full align-middle transition duration-300 ease-linear"
                    />
                    <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div className="flex h-full items-end justify-start">
                                <div className="m-6 text-white">
                                    <h5 className="mb-3 text-lg font-bold">
                                        Beautiful waterfall
                                    </h5>
                                    <p>
                                        <small>
                                            Published <u>04.01.2022</u> by Joe
                                            Svan
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default RecipesCatalog
