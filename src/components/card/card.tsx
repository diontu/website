import {
    Card as CardComponent,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

type CardProps = {
    title?: string
    description?: string
    children: React.ReactNode
}

const Card = (props: CardProps): JSX.Element => {
    return (
        <CardComponent>
            {props.title && (
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                </CardHeader>
            )}
            {props.description && (
                <CardDescription>{props.description}</CardDescription>
            )}
            <CardContent>{props.children}</CardContent>
        </CardComponent>
    )
}

export default Card
