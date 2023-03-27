import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from 'yup';
import React from 'react'
import { roomInterface } from '@app/interface/general.interfaces';
import { Value } from 'sass';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { roomAdded, roomUpdated, selectLastRoomId } from '@features/pageState/roomSlice';

type Props = {
    isEdit:boolean
    data?: roomInterface
}

export const RoomForm = ({isEdit, data}:Props) => {

    const dispatch = useAppDispatch()
    const lastRoomId = useAppSelector(selectLastRoomId);
    const regexNumber = /^[0-9]*$/;

    let initialValues: roomInterface = { 
        id:0,
        roomNumber: "",
        baseCost:0,
        taxes:0,
        roomType: "",
        hotelId:0,
        img:""
    }

    const validationSchema = Yup.object().shape({
        id: Yup.number(),
        hotelId: Yup.number(),
        img: Yup.string().required().url('La imagen es requerida'),
        roomNumber: Yup.string().required('El numero de habitación es requerido'),
        baseCost:Yup.string().required('El costo base es requerido').matches(regexNumber,"El valor debe ser un numero"),
        taxes:Yup.string().required('Los impuestos es requerido').matches(regexNumber,"El valor debe ser un numero"),
        roomType: Yup.string().required('El tipo de habitación es requerido'),
    });

    const handleSubmit = (values: any) => {
        console.log(`llega${values}`);

        const roomStatus: roomInterface = {
            id: lastRoomId+1,
            ...values,
            hotelId:data?.hotelId,
        }

        if (isEdit) {
            console.log("Envia");
            
            dispatch(roomUpdated(roomStatus));
        }else{
            console.log("Actualiza");

            dispatch(roomAdded(roomStatus));
        }

    };

    

  return (
    <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({
                values,
            }) => (
                <Form className='sing__in__form'>
                    <div>
                        <Input
                            name="roomNumber"
                            type="text"
                            placeholder='Ingresa el numero de habitación'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="name" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="baseCost"
                            type="text"
                            placeholder='Ingresa el costo base'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="country" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="taxes"
                            type="text"
                            placeholder='Ingresa los impuestos'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="city" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="roomType"
                            type="text"
                            placeholder='Ingresa tipo de habitación'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="adress" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="img"
                            type="dile"
                            placeholder='Ingresa el link de la foto'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="img" />
                        </p>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                    {
                        isEdit ?
                        
                        <Button value='Editar'/>
                        
                        :
                        
                        <Button value='Crear'/>
                    }
                </Form>
            )}
        </Formik>
  )
}
