import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

type BlankPageProps = {
    children: React.ReactNode
}

const BlankPage = (props: BlankPageProps) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default BlankPage
