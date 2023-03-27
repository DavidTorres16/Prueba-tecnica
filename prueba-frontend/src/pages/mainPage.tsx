import React from 'react';
import { useEffect, useState } from "react";
import { SearchBar } from '@components/ui/searchBar';
import { Banner } from '@components/layout/banner';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { toggleTheme } from '@features/theme/themeSlice';
import { Search } from '@components/layout/search';
import { hotelInterface, roomInterface, dataInterface } from '@app/interface/general.interfaces';
import { GeneralCard } from '@components/ui/GeneralCard';
import { Header } from '@components/layout/Header';

export const MainPage = () => {

    const dispatch = useAppDispatch()
    const searchFilter = useAppSelector((state: any) => state.search.searchFilter)

    const hotel: hotelInterface ={
        id:1,
        name:'No tell motel',
        country:'United States',
        city:'Night city',
        adress:'unknown',
        img: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'    
    }

    const dataObject = {data: hotel}

    let arrayDatos: dataInterface[] = [
        dataObject,
        dataObject,
        dataObject
    ] 

    return (
        <main className='main'>
            <Banner 
                titleValue='Descubre los mejores hospedajes'
                titleColor='secondary'
                subtitleValue='Nuestros hoteles te ofrecen una experiencia inolvidable'
                subtitleColor='secondary'
            />
            <Search title='¿Qué deseas buscar?'/>
            <div>
                {
                    arrayDatos.map((data) =>(
                        <GeneralCard {...data}/>
                    ))
                }
            </div>
            {/* <div> */}
            {/* <h1>Busqueda</h1> */}
                {/* <SearchBar /> */}
                {/* <button onClick={e => dispatch(toggleTheme())}>Change theme</button> */}
            {/* </div> */}
        </main>
    )
}