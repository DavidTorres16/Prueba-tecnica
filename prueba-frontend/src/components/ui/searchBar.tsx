import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks';
import {useEffect, useState} from "react";
import { Search } from './Search';
import { hotelSearch } from '../layout/hotelSearch';
import { roomSearch } from '../layout/roomSearch';
import { toggleSearch } from '@features/pageState/pageState';

export const SearchBar = () => {

    //let renderSearch = null

    const [seachText, setSeachText] = useState("")

    const dispatch = useAppDispatch()

    const isHotelSearch = useAppSelector((state => state.search.isHotelSearch))

    const componetHotel = Search(hotelSearch, seachText)

    const componentRoom = Search(roomSearch, seachText)


  return (
    <div>
        <input type="text" value={seachText} onChange={(e) => setSeachText(e.target.value)}/>
        <h1>{isHotelSearch}</h1>
        {isHotelSearch
            ?
            <button onClick={()=>{dispatch(toggleSearch())}}>buscar habitaciones</button>
            :
            <button onClick={()=>{dispatch(toggleSearch())}}>buscar hoteles</button>
        }
        <section>
            {isHotelSearch
                ?
                componetHotel
                :
                componentRoom
            }
        </section>
    </div>
  )
}
