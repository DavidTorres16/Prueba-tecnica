import React from 'react';
import { useEffect, useState } from "react";
import {SearchBar} from '@components/ui/searchBar';
import { Banner } from '@components/layout/banner';

export const MainPage = () => {

    return (
    <div className='theme--default main'>
        <Banner/>
        <h1>Busqueda</h1>
        <div>
            <SearchBar/>
        </div>
    </div>
    )
}