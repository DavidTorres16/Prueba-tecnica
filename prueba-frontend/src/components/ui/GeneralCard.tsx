import React from 'react'
import { dataInterface } from '@app/interface/general.interfaces'
import { isHotel, isRoom } from '@app/interfaceValidators/generalnterfacesValidator'
import { useAppSelector } from '@app/hooks'
import { useDispatch } from 'react-redux'
import { SelectItem } from '@features/pageState/SelectedItemSlice'
import { toggleAction } from '@features/pageState/ActionSlice'
import { toggleSearch } from '@features/pageState/searchSlice'
import { Button } from './Button'
import { roomDeleted } from '@features/pageState/roomSlice'


export const GeneralCard = ({data}: dataInterface) => { 
    
    const dispatch = useDispatch()

    console.log(data);

    const handleClick = () =>{
        if (isHotel(data)) {
            dispatch(SelectItem({value: {data:data}}))
            dispatch(toggleAction({value:"createRoom"}))
            dispatch(toggleSearch({value:"Habitaciones"}))
        }
    }

    const handleEdit = () =>{
        dispatch(SelectItem({value: {data:data}}))
        dispatch(toggleAction({value:"editRoom"}))
    }

    const handleDelete = (id: number) =>{
        dispatch(roomDeleted(id));
    }
    
  return (
    <section className='card' onClick={handleClick}>
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
            :
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
                <div className='card__deployable__options'>
                    <Button value='Eliminar' color='red' onAction={() =>{handleDelete(data.id)}}/>
                    <Button value='Editar' onAction={handleEdit}/>
                </div>
            </div>
        }
    </section>
  )
}
