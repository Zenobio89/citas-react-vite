import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import Header from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditar, setPacienteEditar] = useState({});

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
    setPacientes(pacientesLS);
  }, []);
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacienteActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacienteActualizados);
  };
  return (
    <div className="container mx-auto mt-10">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          pacienteEditar={pacienteEditar}
          setPacienteEditar={setPacienteEditar}
        ></Formulario>
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteEditar={setPacienteEditar}
          eliminarPaciente={eliminarPaciente}
        ></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
