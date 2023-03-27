import { Banner } from '@components/layout/banner'
import { Search } from '@components/layout/search'
import React from 'react'

export const AdminPage = () => {

  const bannerData = {
    titleColor: 'primary',
    titleValue: 'Modo administrador',
    subtitleColor: 'primary',
    subtitleValue: 'Aquí podrás administrar tus hoteles y habitaciones con facilidad'
  }
    
  return (
    <main className='main'>
        <Banner 
          titleColor= 'secondary'
          titleValue= 'Modo administrador'
          subtitleColor= 'secondary'
          subtitleValue= 'Aquí podrás administrar tus hoteles y habitaciones con facilidad'
        />
        <Search title='Busca el hotel que quieres administrar'/>
    </main>
  )
}
