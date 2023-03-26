import React from 'react'
import { dataInterface } from '@app/interface/general.interfaces'
import { isHotel, isRoom } from '@app/interfaceValidators/generalnterfacesValidator'
import { useAppSelector } from '@app/hooks'



export const GeneralCard = (prop: dataInterface) => { 
    
  return (
    <section className='card'>
        {
            prop.data != null && isHotel(prop.data)?
            <>
                <img src={prop.data.img} alt="hotel image" className='card__image'/>
                <div className='card__body'>
                
                    <section className='card__location__adress'>
                        <div className='name'>
                            <h3>
                                {prop.data.name }
                            </h3>
                        </div>
                        <div className='card__location'>
                            <div>
                                <h4>
                                    País: {prop.data.country}
                                </h4>
                                <h4>
                                    Ciudad: {prop.data.city }
                                </h4>
                            </div>
                        </div>
                        <div>
                            <h4>
                                Dirección: {prop.data.adress }
                            </h4>
                        </div>
                    </section>
                </div>
            </>
            : prop.data != null && isRoom(prop.data)?
            <div className='card__body'>

                <img src={prop.data.img} alt="room image" className='card__image'/>

                <section className='card__location__adress'>
                    <div className='name'>
                        <h3>
                            Numero habitación: {prop.data.roomNumber}
                        </h3>
                    </div>
                    <div className='card__location'>
                        <div>
                            <h4>
                                Tipo habitación: {prop.data.roomType}
                            </h4>

                            <h4>
                                Precio base: {prop.data.baseCost}
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h4>
                            impuesto por habitación: {prop.data.taxes}
                        </h4>
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
