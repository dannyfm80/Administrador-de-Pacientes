import { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {

  //Almacenando la info en el localStorage
  let citasInicales = JSON.parse(localStorage.getItem('citas'));
  if(!citasInicales){
    citasInicales = [];
  }

  //useStates
  const [citas, setCitas] = useState(citasInicales);

  const citasAlmacenadas= () =>{
    if(citasInicales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }

  useEffect(() => {
    return citasAlmacenadas();
  }, [citas])


  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])
  }


  //funcion que eliminar una cita del componente cita
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  const titulo= citas.length === 0 ?'No hay citas':'Administra tus citas'

  return (
    <div className="App">
      <h1>Administracion de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
              {citas.map(cita =>(
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
