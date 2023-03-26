import { Banner } from '@components/layout/banner'
import React from 'react'

export const AdminPage = () => {

  const bannerData = {
    titleColor: 'primary',
    titleValue: 'Modo administrador',
    subtitleColor: 'primary',
    subtitleValue: 'Aquí podrás administrar tus hoteles y habitaciones con facilidad'
  }
    
  return (
    <>
        <Banner 
          titleColor= 'primary'
          titleValue= 'Modo administrador'
          subtitleColor= 'primary'
          subtitleValue= 'Aquí podrás administrar tus hoteles y habitaciones con facilidad'
        />
        <div>adminView</div>
    </>
    
  )
}
