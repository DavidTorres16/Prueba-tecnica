type Props = {
    value?: string,
    type: 'big' | 'medium' | 'small',
    color?: 'primary' | 'secondary',
    icon?: JSX.Element
}

export const Title = ({ value, type, color = 'primary', icon }: Props) => {
    switch (type) {
        case 'big':
            return <h1 className={`title__app big ${color}`}>{icon}{value}</h1>

        case 'medium':
            return <h2 className={`title__app medium ${color}`}>{icon}{value}</h2>
        
        case 'small':
            return <h4 className={`title__app small ${color}`}>{icon}{value}</h4>

        default:
            return <h1 className={`title__app big ${color}`}>{icon}{value}</h1>
    }

}
