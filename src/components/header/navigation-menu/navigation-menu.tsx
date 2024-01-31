import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '../../utils'
import isMobile from '@/components/hooks/isMobile'

type NavProps = {
    nav: NavMenu
}

export type NavMenu = (NavSingle | NavMulti)[]

type NavStaple = {
    title: string
}

type NavSingle = NavStaple & {
    href: string
    menu?: never
}

type NavMulti = NavStaple & {
    href?: never
    main: Flatten<NavMenuContent>
    menu: NavMenuContent
    // adds a "more" menu and directs to the href
    moreHref?: string
}

export type NavMenuContent = {
    title: string
    href: string
    description: string
}[]

const hasContextMenu = (nav: NavMulti | NavSingle): nav is NavMulti => {
    return nav.menu !== undefined
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-left text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-left line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

const Navigation = (props: NavProps): JSX.Element => {
    const isWindowMobile = isMobile()
    const onBurgerClick = (): void => {
        // to something
    }
    const renderMobileNav = (): JSX.Element => {
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
    return isWindowMobile ? (
        renderMobileNav()
    ) : (
        <NavigationMenu className="justify-end text-lg">
            <NavigationMenuList>
                {props.nav.map((item) => {
                    if (!hasContextMenu(item)) {
                        return (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink
                                    href={item.href}
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    }
                    return (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuTrigger>
                                {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                                    {item.main && (
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href={item.main.href}
                                                >
                                                    {/* <Icons.logo className="h-6 w-6" /> */}
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        {item.main.title}
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        {item.main.description}
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    )}
                                    {item.menu.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navigation
