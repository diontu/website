import Card from '@/components/card/card'

type CardSectionProps = {
    id?: string
    title?: string
    description?: string
    children: React.ReactNode
}

const CardSection = (props: CardSectionProps): JSX.Element => {
    return (
        <div id={props.id} className="my-12">
            <Card title={props.title} description={props.description}>
                {props.children}
            </Card>
        </div>
    )
}

export default CardSection
