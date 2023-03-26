import { Title } from '@components/ui/Title'
import React from 'react'

export const Banner = () => {
  return (
    <section className='banner__section'>
      <img className='banner__image' src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="hotel views" />

      <article className="banner__information">
        <div className="__information">
          <Title
            color='secondary'
            value='Descubre la excelencia en hospedaje:'
            type='big'
          />
          <Title
            color='secondary'
            value='Nuestros hoteles te ofrecen una experiencia inolvidable'
            type='medium' />
        </div>
      </article>
    </section>
  )
}
