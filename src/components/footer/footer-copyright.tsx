type CopyrightProps = {
    details: CopyrightDetails
}

export type CopyrightDetails = {
    name: string
    href: string
}

const FooterCopyright = (props: CopyrightProps): JSX.Element => {
    return (
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span>© 2023 Copyright: </span>
            <a
                className="font-semibold text-neutral-600 dark:text-neutral-400"
                href={props.details.href}
            >
                {props.details.name}
            </a>
        </div>
    )
}

export default FooterCopyright
