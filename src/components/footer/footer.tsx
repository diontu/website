import { Socials } from '@/components/footer/footer-socials'
import FooterCopyright, {
    CopyrightDetails,
} from '@/components/footer/footer-copyright'

// TODO: make this more customizable with props
// TODO: add customization for contact, link navigation, and socials
type FooterProps = {
    copyrightDetails?: CopyrightDetails
    socials?: Socials
}

const Footer = (props: FooterProps): JSX.Element => {
    return (
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            Dion Tu
                        </h6>
                        <p>A frontend guy that does frontend things.</p>
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Socials
                        </h6>
                        <p className="mb-4">
                            <a
                                target="_blank"
                                href="https://github.com/diontu"
                                className="text-neutral-600 dark:text-neutral-200"
                            >
                                GitHub
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                target="_blank"
                                href="https://www.youtube.com/@notasoftwareengineer"
                                className="text-neutral-600 dark:text-neutral-200"
                            >
                                YouTube
                            </a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Links
                        </h6>
                        <p className="mb-4">
                            <a
                                href="/#about"
                                className="text-neutral-600 dark:text-neutral-200"
                            >
                                About
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                href="/#experience"
                                className="text-neutral-600 dark:text-neutral-200"
                            >
                                Experience
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                href="/#projects"
                                className="text-neutral-600 dark:text-neutral-200"
                            >
                                Projects
                            </a>
                        </p>
                        <p>
                            <a
                                href="/recipes"
                                className="text-neutral-600 dark:text-neutral-200"
                            >
                                Recipes
                            </a>
                        </p>
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            Toronto, ON
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <a href="mailto:diontu1@gmail.com">
                                <div className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                    diontu1@gmail.com
                                </div>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {props.copyrightDetails && (
                <FooterCopyright details={props.copyrightDetails} />
            )}
        </footer>
    )
}

export default Footer
