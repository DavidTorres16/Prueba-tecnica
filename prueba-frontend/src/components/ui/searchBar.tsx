import React, { ChangeEvent, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { useEffect, useState } from "react";
import { Search } from './Search';
import { hotelSearch } from '../layout/hotelSearch';
import { roomSearch } from '../layout/roomSearch';
import { toggleSearch } from '@features/pageState/searchSlice';
import { InputSearch } from './InputSearch';
import { toggleTheme } from '@features/theme/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FilterSelector } from './selector';
import { title } from 'process';

export const SearchBar = () => {
    //let renderSearch = null
    const [seachText, setSeachText] = useState("")
    const [selectorData, setSelectorData] = useState([""])
    const dispatch = useAppDispatch()
    const style = 'filter'
    const isHotelSearch = useAppSelector((state: any) => state.search.isHotelSearch)
    const userPermissions = useAppSelector((state:any) => state.user.userPermissions)
    const componetHotel = Search(hotelSearch, seachText, style)
    const componentRoom = Search(roomSearch, seachText, style)

    const handleSearch = (event: FormEvent) : void => {
        event.preventDefault()
    }

    const handleAction = (event: ChangeEvent<HTMLInputElement>) : void =>{
        dispatch(toggleSearch({value: event.target.value}))
    }

    useEffect(() => {
        if (userPermissions == "admin") {
            setSelectorData(["Hoteles","Habitaciones"])
        }
        else{
            setSelectorData(["Hoteles","Habitaciones","Fecha de entrada","Fecha de salida"])
        }
    }, [userPermissions])
    

    return (
        <div className='search__filter__box'>
            <InputSearch
                onAction={handleSearch}
                type='text'
                placeholder='¿Que estas buscando?'
            />
            <div className='filter__box'>
                <div className='filter__text'>
                    <p>
                        Seleccione un filtro de busqueda:
                    </p>
                </div>
                <FilterSelector 
                    data = {selectorData}
                    title = 'Seleccione un filtro'
                    onAction={handleAction}
                />
            </div>
        </div>
    )
}