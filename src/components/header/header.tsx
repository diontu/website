import { useNavigate } from 'react-router-dom'
import Navigation, {
    NavMenu,
} from '@/components/header/navigation-menu/navigation-menu'
import reactLogo from '@/assets/react.svg'

type HeaderProps = {
    nav: NavMenu
}

const Header = (props: HeaderProps): JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className="flex z-10 sticky top-0 w-full py-3 bg-white border-b-2 border-slate-150">
            {/* TODO: replace with my own logo or initials */}
            {/* <img
                src={reactLogo}
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate('/')}
            /> */}
            <Navigation nav={props.nav} />
        </div>
    )
}

export default Header
