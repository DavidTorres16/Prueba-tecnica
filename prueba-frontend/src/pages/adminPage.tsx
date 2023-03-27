import { useAppSelector } from '@app/hooks'
import { dataInterface, hotelInterface, roomInterface } from '@app/interface/general.interfaces'
import { isHotel as hotelValidator} from '@app/interfaceValidators/generalnterfacesValidator'
import { Banner } from '@components/layout/banner'
import { HotelForm } from '@components/layout/hotelForm'
import { RoomForm } from '@components/layout/roomForm'
import { Search } from '@components/layout/search'
import { Article } from '@components/ui/Article'
import { CenterSection } from '@components/ui/CenterSection'
import { GeneralCard } from '@components/ui/GeneralCard'
import { Title } from '@components/ui/Title'
import { VerticalCard } from '@components/ui/verticalCard'
import React, { useEffect, useState } from 'react'

export const AdminPage = () => {

  const [isHotel, setIsHotel] = useState(false)
  const [isEdit, setIsEdit] = useState(false)


  const actionType = useAppSelector((state:any) => state.action.actionType)
  const searchFilter = useAppSelector((state: any) => state.search.searchFilter)
  const selectedData = useAppSelector((state: any) => state.selected.selected)
  const rooms = useAppSelector((state: any) => state.rooms.rooms);

  const hotel: hotelInterface ={
    id:1,
    name:'No tell motel',
    country:'United States',
    city:'Night city',
    adress:'unknown',
    img: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'    
  }

  const dataObject = {data: hotel}
  
  let arrayDatos: dataInterface[] = [
      ...rooms
  ] 

  console.log(arrayDatos);
  
  useEffect(() => {
    if (selectedData != undefined) {
      if(hotelValidator(selectedData.data)){
        setIsHotel(true)
      }
      if (actionType == 'editRoom') {
        setIsEdit(true)
      }
    }
  }, [selectedData])
  
  return (
    <main className='main'>
        <Banner 
          titleColor= 'secondary'
          titleValue= 'Modo administrador'
          subtitleColor= 'secondary'
          subtitleValue= 'Aquí podrás administrar tus hoteles y habitaciones con facilidad'
        />
        <Search title='Busca el hotel que quieres administrar'/>
        <section className='main__info'>
        {
          actionType == 'createHotel'
          ?(
            <div>
              <CenterSection width = "short">
                <Article>
                  <Title type='small' value='Crea un hotel' />
                  <HotelForm/>
                </Article>
              </CenterSection>
            </div>
          ):
          (<div>
            {isHotel || isEdit ? (
              <VerticalCard {...selectedData}/>
            ) : <></>}
            <CenterSection width = "short">
              <Article>
                { isEdit ? (
                <Title type='small' value={`Edita la habitación ${selectedData.data.roomNumber}`} />
                ) : <Title type='small' value='Crea una habitación' />}
                <RoomForm isEdit={isEdit} data={selectedData}/>
              </Article>
            </CenterSection>
          </div>
          )
        }
          <div>
              {
                  arrayDatos.map((data) =>(
                      <GeneralCard data={data}/>
                  ))
              }
          </div>
        </section>
    </main>
  )
}
