import React from 'react'
import { dataInterface } from '@app/interface/general.interfaces'
import { isHotel, isRoom } from '@app/interfaceValidators/generalnterfacesValidator'



export const GeneralCard = (prop: dataInterface) => {    

  return (
    <section className='card'>
        {
            prop.data != null && isHotel(prop.data) ?
            <div className='cardBody'>
                <div className='hotelName'>
                    <h3>
                        {prop.data.name }
                    </h3>
                </div>
                <section className='cardLocationAdress'>
                    <div className='cardLocation'>
                        <div>
                            <h4>
                                {prop.data.country}
                            </h4>

                        </div>
                        <div>
                            <h4>
                                {prop.data.city }
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h4>
                            {prop.data.adress }
                        </h4>
                    </div>
                </section>
            </div>
            : prop.data != null && isRoom(prop.data) ?
            <div className='cardBody'>

                <h3>
                    {prop.data.roomNumber}
                </h3>

                <h4>
                    {prop.data.roomType}
                </h4>

                <h4>
                    {prop.data.baseCost}
                </h4>

                <h4>
                    {prop.data.taxes}
                </h4>
                <hr className='bottomLine'></hr>
            </div>
            :
            <div>
                No data
            </div>
        }
    </section>
  )
}
