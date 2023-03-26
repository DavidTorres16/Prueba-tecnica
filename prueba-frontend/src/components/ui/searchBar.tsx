import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { useEffect, useState } from "react";
import { Search } from './Search';
import { hotelSearch } from '../layout/hotelSearch';
import { roomSearch } from '../layout/roomSearch';
import { toggleSearch } from '@features/pageState/pageState';
import { InputSearch } from './InputSearch';
import { toggleTheme } from '@features/theme/themeSlice';

export const SearchBar = () => {
    //let renderSearch = null
    const [seachText, setSeachText] = useState("")
    const dispatch = useAppDispatch()
    const isHotelSearch = useAppSelector((state: any) => state.search.isHotelSearch)
    const componetHotel = Search(hotelSearch, seachText)
    const componentRoom = Search(roomSearch, seachText)

    return (
        <div>
            {/* <Input title='Test' type="text" value={seachText} onChange={(e: any) => setSeachText(e.target.value)} /> */}
            <InputSearch 
                type='text'
            />
            <h1>{isHotelSearch}</h1>
            {isHotelSearch
                ?
                <button onClick={() => { dispatch(toggleSearch()) }}>buscar habitaciones</button>
                :
                <button onClick={() => { dispatch(toggleSearch()) }}>buscar hoteles</button>
            }
            <section>
                {isHotelSearch
                    ?
                    componetHotel
                    :
                    componentRoom
                }
            </section>
            <button onClick={e => dispatch(toggleTheme())}>Toggle theme</button>
        </div>
    )
}