import React from 'react';
import { useEffect, useState } from "react";
import { SearchBar } from '@components/ui/searchBar';
import { Banner } from '@components/layout/banner';
import { useAppDispatch } from '@app/hooks';
import { toggleTheme } from '@features/theme/themeSlice';
import { Search } from '@components/layout/search';

export const MainPage = () => {

    const dispatch = useAppDispatch()

    return (
        <main className='main'>
            <Banner />
            <Search/>
            {/* <div> */}
            {/* <h1>Busqueda</h1> */}
                {/* <SearchBar /> */}
                {/* <button onClick={e => dispatch(toggleTheme())}>Change theme</button> */}
            {/* </div> */}
        </main>
    )
}