type Props = {
    value: string
} 

export const Button = ({value} : Props) => {
    return (
        <button className='button__app'>{value}</button>
    )
}
