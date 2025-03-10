
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MassageProps = {
    msg: string
    type: 'success' | 'error'
}

export interface FormComponentsProps {
    inputs: InputProps[]
    buttons: ButtonProps[]
    message?: MassageProps
}