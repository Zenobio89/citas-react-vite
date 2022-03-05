import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes, setPacienteEditar,eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length === 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold ">
              {" "}
              y aparecerán en este lugar
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              {" "}
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPacienteEditar={setPacienteEditar}
              eliminarPaciente={eliminarPaciente}
            ></Paciente>
          ))}
        </>
      )}
    </div>
  );
};
