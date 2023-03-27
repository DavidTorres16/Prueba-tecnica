import React from 'react'
import { dataInterface } from '@app/interface/general.interfaces'
import { isHotel, isRoom } from '@app/interfaceValidators/generalnterfacesValidator'
import { useAppSelector } from '@app/hooks'


export const GeneralCard = ({data}: dataInterface) => { 
    
  return (
    <section className='card'>
        {
            data != null && isHotel(data)?
            <>
                <img src={data.img} alt="hotel image" className='card__image'/>
                <div className='card__body'>
                
                    <section className='card__location__adress'>
                        <div className='name'>
                            <p>
                                {data.name }
                            </p>
                        </div>
                        <div className='card__location'>
                            <div>
                                <p>
                                    País: 
                                </p>
                                <p>{data.country}</p>
                            </div>
                            <div>
                                <p>
                                    Ciudad: 
                                </p>
                                <p>{data.city }</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Dirección: 
                            </p>
                            <p>{data.adress }</p>
                        </div>
                    </section>
                </div>
            </>
            : data != null && isRoom(data)?
            <div className='card__body'>

                <img src={data.img} alt="room image" className='card__image'/>

                <section className='card__location__adress'>
                    <div className='name'>
                        <p>
                            Numero habitación: {data.roomNumber}
                        </p>
                    </div>
                    <div className='card__location'>
                        <div >
                            <p>
                                Tipo habitación: 
                            </p>
                            <p>{data.roomType}</p>
                        </div>
                        <div>
                            <p>
                                Precio base: 
                            </p>
                            <p>{data.baseCost}</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            impuesto por habitación: 
                        </p>
                        <p>{data.taxes}</p>
                    </div>
                </section>
            </div>
            :
            <div>
                No data
            </div>
        }
    </section>
  )
}
