import Navigation from '@/components/header/navigation-menu/navigation-menu'
import reactLogo from '@/assets/react.svg'

const Header = (): JSX.Element => {
    return (
        <div className="flex w-full my-3">
            <img src={reactLogo} className="h-12 w-12" />
            <Navigation
                nav={[
                    { title: 'one', href: 'hello' },
                    { title: 'one', href: 'hello' },
                    {
                        title: 'two',
                        menu: [
                            {
                                title: 'title',
                                href: 'something',
                                description: 'something description',
                            },
                        ],
                    },
                    {
                        title: 'two',
                        menu: [
                            {
                                title: 'title',
                                href: 'something',
                                description: 'something description',
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
}

export default Header
