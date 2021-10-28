import React, { useState } from 'react';
import '../FormStyles.css';
import EditorField from "./EditorField"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";




const ActivitiesForm = () => {
    const [imagen, setImagen] = useState(null)
    const [initialValues, setInitialValues] = useState({});





    // dummy preview
    const [imagenPreview, setImagenPreview] = useState(null)
    const urlPreview = (file) => {
        if (file !== null) {
            setImagenPreview(URL.createObjectURL(file))
            setImagen(file)
        }
    }


    /*handler Change de inputs  pd: El componente EditorField
     necesita llevarse el setState/state para realizar cambios */
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(name)
        switch (name) {
            case "name": setInitialValues({ ...initialValues, name: value })
                break;
            case "image":
                const valueFile = e.target.files[0];
                setInitialValues({ ...initialValues, image: imagen }); urlPreview(valueFile)
                break;
            default: setInitialValues({ ...initialValues })
        }

    }
    console.log(initialValues)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    // validacion de YUP para formik
    const validate = Yup.object({
        name: Yup.string()
            .required("necesitas ingresar un titulo"),
        description: Yup.string().required("Debes escribir x cantidad de palabras"),
        image: Yup.mixed().required('Necesitas subir una foto'),
    });
    return (

        // Dar estilos al dummy como una card preview de la actividad
        <div className="container">
            <div className="row">
                <div className="">
                    <h1 className="">Dummy</h1>
                    {imagenPreview === null ? null : <img src={imagenPreview} alt="imagen" accept="image/jpg, image/png" height="200" width="300" />}
                    <h3> {initialValues.name} </h3>
                    <div dangerouslySetInnerHTML={{ __html: initialValues.description }}>
                    </div>


                </div>
            </div>
            <Formik initialValues={{ name: "", image: null, description: "" }}
                validationSchema={validate}>
                {formik => (
                    <Form className="form-container" >
                        <input className="input-field" autoComplete="off"
                            type="text" name="name"  onChange={handleChange} placeholder="Activity Title"></input>
                        {console.log(formik)}
                        <ErrorMessage name="name"
                            render={(msg) => <span className="error"> {msg} </span>}
                        />
                        <input type="file" name="image" onChange={handleChange} />
                        <ErrorMessage name="image"
                            render={(msg) => <span className="error"> {msg} </span>}
                        />
                        <EditorField name="description" setInitialValues={setInitialValues} initialValues={initialValues} />
                        <button className="submit-btn" type="submit" >Send</button>
                    </Form>
                )}

            </Formik>
        </div >

    );
}

export default ActivitiesForm;