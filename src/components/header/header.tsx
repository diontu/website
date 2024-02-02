import Navigation, {
    NavMenu,
    hasContextMenu,
} from '@/components/header/navigation-menu/navigation-menu'
import isMobile from '@/hooks/isMobile'
import { useRef } from 'react'

type HeaderProps = {
    nav: NavMenu
}

const Header = (props: HeaderProps): JSX.Element => {
    const navRef = useRef<HTMLDivElement>(null)
    const isWindowMobile = isMobile()

    const onBurgerClick = (): void => {
        if (!navRef.current) return
        navRef.current?.classList.toggle('h-0')
    }

    const renderMobileMenu = (): JSX.Element => {
        return (
            <div className="w-full flex justify-end">
                <img
                    src="/burger-menu.svg"
                    alt="hamburger menu"
                    onClick={onBurgerClick}
                    className="cursor-pointer w-[48px] h-[48px]"
                />
            </div>
        )
    }

    const renderMobileNav = (): JSX.Element => {
        return (
            <div
                id="mobile-nav"
                ref={navRef}
                className="h-0 flex flex-col w-full overflow-hidden"
            >
                {props.nav.map((navMenu) => (
                    <div className="flex justify-start w-full my-1 py-1">
                        {hasContextMenu(navMenu) ? (
                            <a href={navMenu.main.href} className="w-full">
                                {navMenu.title}
                            </a>
                        ) : (
                            <a href={navMenu.href} className="w-full">
                                {navMenu.title}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div
            id="header-nav"
            className="flex flex-col z-10 sticky top-0 w-full py-3 bg-white border-b-2 border-slate-150"
        >
            <div className="flex w-full">
                <a href="/">
                    <img src="/logo.png" className="h-12 w-12 cursor-pointer" />
                </a>
                {isWindowMobile ? (
                    renderMobileMenu()
                ) : (
                    <Navigation nav={props.nav} />
                )}
            </div>
            {isWindowMobile && renderMobileNav()}
        </div>
    )
}

export default Header
