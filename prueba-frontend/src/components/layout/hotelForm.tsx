import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { ErrorMessage, Form, Formik } from 'formik'
import * as Yup from 'yup';
import React from 'react'
import { hotelInterface } from '@app/interface/general.interfaces';


export const HotelForm = () => {

    let initialValues: hotelInterface = { 
        id:0,
        name:"",
        country:"",
        city:"",
        adress:"",
        img:""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es requerido'),
        country: Yup.string().required('El país es requerido'),
        city: Yup.string().required('La ciudad es requerida'),
        adress: Yup.string().required('La dirección es requerida'),
        img: Yup.string().required('La imagen es requerida'),
    });

    const handleSubmit = (values: any) => {
        console.log(values);
        // Realizar acción de envío del formulario aquí
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
                            name="name"
                            type="text"
                            placeholder='Ingresa el nombre del hotel'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="name" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="name"
                            type="text"
                            placeholder='Ingresa el país del hotel'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="country" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="name"
                            type="text"
                            placeholder='Ingresa la ciudad del hotel'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="city" />
                        </p>
                    </div>
                    <div>
                        <Input
                            label='Ingresa la dirección del hotel'
                            name="adress"
                            type="text"
                            placeholder='Ingresa la dirección del hotel'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="adress" />
                        </p>
                    </div>
                    <div>
                        <Input
                            name="img"
                            type="dile"
                            placeholder='Ingresa el link de la foto del hotel'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="img" />
                        </p>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                    <Button value='Crear' />
                </Form>
            )}
        </Formik>
  )
}
