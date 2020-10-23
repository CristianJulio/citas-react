import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({crearCita}) => {

  // Crear State de cita
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    hora: "",
    fecha: "",
    sintomas: "",
    id: ''
  });

  const [error, setError] = useState(false);

  const handleChange = event => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value,
    });
  }

  // Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Al enviar el formulario
  const submitCita = event => {
    event.preventDefault();

    // Validar
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError(true);
      return;
    }

    // Eliminar mensaje
    setError(false);

    // Asignar id
    cita.id = uuidv4();

    // Crear la cita
    crearCita(cita);

    // Resetear el formulario
    setCita({
      mascota: "",
      propietario: "",
      hora: "",
      fecha: "",
      sintomas: "",
      id: ''
    });
  }

  return (
    <>
      <h2>Crear Cita</h2>

      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

      <form
        onSubmit={submitCita}
      >
        <label htmlFor="">Nombre Mascota</label>
        <input
          className="u-full-width"
          name="mascota"
          onChange={handleChange}
          placeholder="Nombre de la mascota"
          type="text"
          value={mascota}
        />
        <label htmlFor="">Dueño</label>

        <input
          className="u-full-width"
          name="propietario"
          onChange={handleChange}
          placeholder="Nombre de la mascota"
          type="text"
          value={propietario}
        />

        <label htmlFor="">Fecha</label>
        <input
          className="u-full-width"
          name="fecha"
          onChange={handleChange}
          type="date"
          value={fecha}
        />

        <label htmlFor="">Hora</label>
        <input
          className="u-full-width"
          name="hora"
          onChange={handleChange}
          type="time"
          value={hora}
        />

        <label htmlFor="">Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width" 
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button 
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </>
  );
};

Form.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Form;