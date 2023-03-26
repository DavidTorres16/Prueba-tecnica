import React from 'react';
import { useEffect, useState } from "react";
import {SearchBar} from '@components/ui/searchBar';
import { Banner } from '@components/layout/banner';
import { GeneralCard } from '@components/ui/GeneralCard';
import { hotelInterface, roomInterface, dataInterface } from '@app/interface/general.interfaces';

export const MainPage = () => {

    const hotel: hotelInterface ={
        id:1,
        name:'No tell motel',
        country:'United States',
        city:'Night city',
        adress:'unknown'    
    }

    const dataObject = {data: hotel}
    

    const arrayHoteles: hotelInterface[] = [
        hotel,
        hotel,
        hotel
    ] 

    return (
    <div className='theme--default main'>
        <Banner/>
        <h1>Busqueda</h1>
        <div>
            <SearchBar/>
        </div>
        <div>
            {
                arrayHoteles.map((hotel)=>(
                    <GeneralCard {...dataObject}/>
                ))
            }
        </div>
    </div>
    )
}