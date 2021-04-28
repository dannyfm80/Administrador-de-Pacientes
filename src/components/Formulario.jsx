import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        paciente:'',
        responsable:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError] = useState(false);

    const actualizarState = (e) =>{
        setCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    const {paciente, responsable, fecha, hora, sintomas} = cita;

   
    const submitCita = (e) => {
        e.preventDefault();
        //validad
        if(paciente.trim() === '' || responsable.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return;
        }else{
            setError(false);
        }

        //asignar ID
        cita.id= uuidv4();
        //Crear la cita
        crearCita(cita);

        //limpiar la tabla
        setCita({
            paciente:'',
            responsable:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return (
        <div>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Existe un error</p>:null }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Paciente:</label>
                <input
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nombre Paciente"
                    onChange={actualizarState}
                    value={paciente}
                />

                <label>Nombre Responsable:</label>
                <input
                    type="text"
                    name="responsable"
                    className="u-full-width"
                    placeholder="Nombre del Responsable"
                    onChange={actualizarState}
                    value={responsable}

                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}

                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}

                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}

                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </div>
    )
}

export default Formulario
