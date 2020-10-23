import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Cita from "./components/Cita";

function App() {
  // Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // Listado de citas
  const [citas, setCitas] = useState(citasIniciales);

  
  // useEfffect
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    console.log(citas)
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  // Crear cita
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  

  // Función para eliminar una cita
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas([...nuevasCitas]);
  };

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.length ? (
              <h2>Administra tus Citas</h2>
            ) : (
              <h2>No hay citas</h2>
            )}
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;