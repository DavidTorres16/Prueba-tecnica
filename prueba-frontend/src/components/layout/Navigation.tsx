import { NavLink } from 'react-router-dom'

export interface NavLinkInterface {
    link: string,
    to: string
}

type Props = {
    links: NavLinkInterface[]
}

export const Navigation = ({ links } : Props) => {
    return (
        <nav className='nav__bar'>
            {links.map(item => (<NavLink className='link' key={item.to} to={item.to}>{item.link}</NavLink>))}
        </nav>
    )
}
