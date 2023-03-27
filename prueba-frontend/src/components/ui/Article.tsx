export const Article = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    return (
        <article className='article__app'>
            {children}
        </article>
    )
}
