import { FormEventHandler } from "react"

type Props = {
    value: string
    onAction?: FormEventHandler
    color?: string
    onSubmit?: FormEventHandler
} 

export const Button = ({value, onAction: onAction = () => {}, color = "", onSubmit = () => {}} : Props) => {
    return (
        <button className={`button__app${color}`} onClick={onAction} onSubmit={onSubmit}>{value}</button>
    )
}
