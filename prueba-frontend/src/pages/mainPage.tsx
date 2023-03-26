import React from 'react';
import { useEffect, useState } from "react";
import { SearchBar } from '@components/ui/searchBar';
import { Banner } from '@components/layout/banner';
import { useAppDispatch } from '@app/hooks';
import { toggleTheme } from '@features/theme/themeSlice';
import { Search } from '@components/layout/search';
import { hotelInterface, roomInterface, dataInterface } from '@app/interface/general.interfaces';
import { GeneralCard } from '@components/ui/GeneralCard';

export const MainPage = () => {

    const dispatch = useAppDispatch()

    const hotel: hotelInterface ={
        id:1,
        name:'No tell motel',
        country:'United States',
        city:'Night city',
        adress:'unknown'    
    }

    const habitaciones: roomInterface = {
        id:1,
        roomNumber: 1,
        baseCost:600,
        taxes:10,
        roomType:"De lujo",
        hotelId:1,
        userId:1
    }

    const arrayDatos: dataInterface[] = [
        {data:hotel},
        {data:hotel},
        {data:hotel},
        {data:habitaciones},
        {data:habitaciones},
        {data:habitaciones}
    ] 

    return (
        <main className='main'>
            <Banner />
            <Search/>
            <div>
                {
                    arrayDatos.map((data) =>(
                        <GeneralCard prop={data}/>
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