import { FormEventHandler } from "react";

type Props = {
    type: 'text' | 'number' | 'email',
    placeholder?: string,
    onAction: FormEventHandler,
    [key: string]: any;
}

export const InputSearch = ({ type, placeholder = 'Input', onAction = () => {},...props }: Props) => {
    return (
        <form onSubmit={onAction} className='input__search__container'>
            <input
                className='input__search__app'
                type={type}
                placeholder={placeholder}
                {...props}
            />
            <button className='input__search__button'>Buscar hoteles</button>
        </form>
    )
}
