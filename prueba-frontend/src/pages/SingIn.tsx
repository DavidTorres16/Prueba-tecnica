import { SingInForm } from '@components/layout/SingInForm'
import { Banner } from '@components/layout/banner'
import { Article } from '@components/ui/Article'
import { CenterSection } from '@components/ui/CenterSection'
import { Title } from '@components/ui/Title'

const bannerData = {
    titleColor: 'secondary',
    titleValue: 'Iniciar sesión',
    subtitleColor: 'secondary',
    subtitleValue: 'Antes de continuar inicia sesión con tu usuario y contraseña'
}

export const SingIn = () => {
    return (
        <main className='main__singin__form'>
            <Banner 
                titleColor = 'secondary'
                titleValue = 'Iniciar sesión'
                subtitleColor = 'secondary'
                subtitleValue = 'Antes de continuar inicia sesión con tu usuario y contraseña'
            />
            <CenterSection width='short'>
                <Article>
                    <Title type='small' value='Ingresa' />
                    <SingInForm />
                </Article>
            </CenterSection>
        </main>
    )
}
