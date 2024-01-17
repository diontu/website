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
        <div className="flex w-full my-3">
            <img
                src={reactLogo}
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate('/')}
            />
            <Navigation nav={props.nav} />
        </div>
    )
}

export default Header
