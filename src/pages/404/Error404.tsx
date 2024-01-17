import BlankPage from '@/page-templates/blank-page/blank-page'

const Error404 = (): JSX.Element => {
    return (
        <BlankPage>
            <div className="my-24">
                <h1>404 Error</h1>
                <p>
                    <i>
                        I couldn't find the page you were looking for. Please
                        try again.
                    </i>
                </p>
            </div>
        </BlankPage>
    )
}

export default Error404
