export const CenterSection = ({children, width} : {children: JSX.Element, width: 'large' | 'short'}) => {
    return <div className={`center__section ${width}`}> {children}</div>
}
