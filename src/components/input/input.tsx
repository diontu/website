import { Input as InputComponent } from '@/components/ui/input'

type InputProps = {
    type?: string
    placeholder?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = (props: InputProps): JSX.Element => {
    return (
        <div className="my-4">
            <InputComponent
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input
