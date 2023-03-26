type Props = {
    value?: string,
    type: 'big' | 'medium' | 'small',
    color?: 'primary' | 'secondary'
}

export const Title = ({ value, type, color = 'primary' }: Props) => {
    switch (type) {
        case 'big':
            return <h1 className={`title__app big ${color}`}>{value}</h1>

        case 'medium':
            return <h2 className={`title__app medium ${color}`}>{value}</h2>
        
        case 'small':
            return <h4 className={`title__app small ${color}`}>{value}</h4>

        default:
            return <h1 className={`title__app big ${color}`}>{value}</h1>
    }

}
