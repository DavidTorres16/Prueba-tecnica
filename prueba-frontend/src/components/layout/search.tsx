import { Title } from '@components/ui/Title'
import { SearchBar } from '@components/ui/searchBar'
import React from 'react'

export const Search = () => {
    return (
        <section className='search__section'>
            <div className="search__box__section">
                <Title value='Busca hoteles de tu interes' type='small'/>
                <SearchBar/>
            </div>
        </section>
    )
}
