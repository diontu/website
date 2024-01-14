import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '../utils'

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
    menu: NavMenuContent
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
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {props.nav.map((item) => {
                    if (!hasContextMenu(item)) {
                        return (
                            <NavigationMenuItem>
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
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px] ">
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
