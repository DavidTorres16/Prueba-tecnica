import { useRef } from "react";
import { useField, ErrorMessage } from 'formik';

type Props = {
    label?: string;
    name: string;
    type?: string;
    placeholder?: string;
}

export const Input: React.FC<Props> = ({ type, placeholder = 'Input', ...props }) => {
    const spanRef = useRef<HTMLSpanElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [field, meta] = useField(props);
    return (
        <div className='input__container'>
            <span ref={spanRef} className='input__span'>{placeholder}</span>
            <input
                className='input__app'
                {...field}
                {...props}
                onFocus={e => spanRef.current?.classList.add('active')}
                ref={inputRef}
                type={type}
            // onBlur={e => !inputRef.current?.value ? spanRef.current?.classList.remove('active') : null}
            />
        </div>
    )
}
