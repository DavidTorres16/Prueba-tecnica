import { CenterSection } from '@components/ui/CenterSection'
import { Title } from '@components/ui/Title'
import { NavLinkInterface, Navigation } from './Navigation'

export const Header = () => {
    const links: NavLinkInterface[] = [
        {
            to: '/sing-in',
            link: 'Ingresar'
        },
        {
            to: '/admin',
            link: 'Admin'
        }
    ]
    return (
        <header className='header__app'>
            <CenterSection width='large'>
                <div className='__flex'>
                    <Title type='small' value='Hotels' />
                    <Navigation links={links} />
                </div>
            </CenterSection>
        </header>
    )
}
