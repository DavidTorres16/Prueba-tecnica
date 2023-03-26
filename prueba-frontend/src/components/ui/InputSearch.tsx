import { useRef } from "react";

type Props = {
    type: 'text' | 'number' | 'email',
    title?: string,
    [key: string]: any;
}

export const InputSearch = ({ type, title = 'Input', ...props }: Props) => {
    const spanRef = useRef<HTMLSpanElement>(null)   
    const inputRef = useRef<HTMLInputElement>(null)   
    return (
        <div className='input__search__container'>
            {/* <span ref={spanRef} className='input__search__span'>{title}</span> */}
            <input
                className='input__search__app'
                onFocus={e => spanRef.current?.classList.add('active')}
                onBlur={e => !inputRef.current?.value ? spanRef.current?.classList.remove('active') : null}
                ref={inputRef}
                type={type}
                {...props}
            />
            <button>Buscar hotel</button>
        </div>
    )
}