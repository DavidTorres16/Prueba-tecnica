import { FilterSelector } from "@components/ui/selector"
import { InputSearch } from "@components/ui/InputSearch"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { toggleSearch } from "@features/pageState/searchSlice"
import { Button } from "@components/ui/Button"
import { toggleAction } from "@features/pageState/ActionSlice"
import { ResetItem, SelectItem } from "@features/pageState/SelectedItemSlice"


export const AdminSearchBar = () => {
    const [seachText, setSeachText] = useState("")
    const [selectorData, setSelectorData] = useState([""])
    const dispatch = useAppDispatch()
    const style = 'filter'
    const userPermissions = useAppSelector((state:any) => state.user.userPermissions)

    const handleSearch = (event: FormEvent) : void => {
        event.preventDefault()
    }

    const handleAction = (event: ChangeEvent<HTMLInputElement>) : void =>{
        dispatch(toggleSearch({value: event.target.value}))
    }

    const handleClickHotel = () : void =>{
        dispatch(toggleAction({value: "createHotel"}))
        dispatch(toggleSearch({value: "Hoteles"}))
    }

    const handleClickRoom = () : void =>{
        dispatch(toggleAction({value: "createRoom"}))
        dispatch(toggleSearch({value: "Habitaciones"}))
        dispatch(ResetItem())
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
            <section className="filter__bottom">
                <div className="filter__btn">
                    <div>
                        <Button
                            value="Crear hotel"
                            onAction={handleClickHotel}
                        />
                    </div>
                    <div>
                        <Button
                            value="Crear habitaciones"
                            onAction={handleClickRoom}
                        />
                    </div>
                </div>
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
            </section>
        </div>
    )
}