import { Badge as BadgeComponent } from '@/components/ui/badge'

type BadgeProps = {
    children: React.ReactNode
}

const Badge = (props: BadgeProps): JSX.Element => {
    return <BadgeComponent>{props.children}</BadgeComponent>
}

export default Badge
