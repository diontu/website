import Navigation, {
    NavMenu,
} from '@/components/header/navigation-menu/navigation-menu'

type HeaderProps = {
    nav: NavMenu
}

const Header = (props: HeaderProps): JSX.Element => {
    return (
        <div className="flex z-10 sticky top-0 w-full py-3 bg-white border-b-2 border-slate-150">
            <a href="/">
                <img src="/logo.png" className="h-12 w-12 cursor-pointer" />
            </a>
            <Navigation nav={props.nav} />
        </div>
    )
}

export default Header
