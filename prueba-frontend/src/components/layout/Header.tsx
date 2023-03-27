import { useAppSelector } from '@app/hooks'
import { CenterSection } from '@components/ui/CenterSection'
import { Title } from '@components/ui/Title'
import { useEffect, useState } from 'react'
import { NavLinkInterface, Navigation } from './Navigation'

export const Header = () => {

    const userData = useAppSelector((state: any) => state.user.userPermissions)

    const [links, setLinks] = useState([
        {
            to: '/sing-in',
            link: 'Ingresar'
        },
        {
            to: '/admin',
            link: 'Admin'
        }
    ])

    useEffect(() => {
        if (userData == 'admin') {
            setLinks([
                {
                    to: '/sing-in',
                    link: 'Ingresar'
                },
                {
                    to: '/admin',
                    link: 'Admin'
                },
                {
                    to: '/',
                    link: 'Inicio'
                }
            ])
        }
        else if(userData != 'none'){
            setLinks([
                {
                    to: '/sing-in',
                    link: 'Ingresar'
                },
                {
                    to: '/admin',
                    link: 'Admin'
                }
            ])
        }else{
            setLinks([
                {
                    to: '/sing-in',
                    link: 'Ingresar'
                }
            ])
        }
        
    
    }, [userData])
    


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
