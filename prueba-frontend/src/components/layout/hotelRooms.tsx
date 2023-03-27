import { hotelInterface } from '@app/interface/general.interfaces'
import { GeneralCard } from '@components/ui/GeneralCard'
import React from 'react'

type hotelData = {
    hotel: hotelInterface
}


export const hotelRooms = ({hotel}:hotelData) => {

    const data = {data:hotel}

  return (
    <div>hotelRooms
        <GeneralCard {...data}/>
        <div>
            
        </div>
    </div>
  )
}
