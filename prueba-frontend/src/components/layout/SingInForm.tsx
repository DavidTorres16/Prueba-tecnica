import React from 'react';
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from 'yup';
import { Input } from '@components/ui/Input';
import { Article } from '@components/ui/Article';
import { SingInData } from '@app/interface/general.interfaces';
import { Button } from '@components/ui/Button';

export const SingInForm = () => {

    let initialValues: SingInData = { name: '', email: '' }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Email no válido').required('El email es requerido'),
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
                            placeholder='Ingresa tu correo'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="name" />
                        </p>
                    </div>
                    <div>
                        <Input
                            label='Ingresa tu contraseña'
                            name="email"
                            type="email"
                            placeholder='Ingresa tu contraseña'
                        />
                        <p className='error__form'>
                            <ErrorMessage name="email" />
                        </p>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                    <Button value='Ingresar' />
                </Form>
            )}
        </Formik>

    )
};