import { useState, useEffect } from "react";
import { validarFormulario } from "../helpers/validarFormulario";
import { Mensaje } from "./Mensaje";

export const Formulario = ({ setPacientes, pacientes, pacienteEditar,setPacienteEditar }) => {
  const [paciente, setPaciente] = useState({
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    mensaje: "",
  });

  const [error, setError] = useState(false);

  const { mascota, propietario, email, alta, mensaje } = paciente;

  useEffect(() => {
    if (Object.entries(pacienteEditar).length > 0) {
      setPaciente(pacienteEditar);
    }
  }, [pacienteEditar]);

  const handleSubmit = (e) => {
    validarFormulario(
      paciente,
      e,
      setError,
      setPacientes,
      pacientes,
      setPaciente,
      pacienteEditar,
      setPacienteEditar
    );
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 m-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mt-5 mb-10"
      >
        {error && (
          <Mensaje mensaje="Todos los campos son Obligatorios..."></Mensaje>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            type="text"
            name="mascota"
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={({ target }) =>
              setPaciente({ ...paciente, [target.name]: target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            name="propietario"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={({ target }) =>
              setPaciente({ ...paciente, [target.name]: target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese su Email..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={({ target }) =>
              setPaciente({ ...paciente, [target.name]: target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            type="date"
            name="alta"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={({ target }) =>
              setPaciente({ ...paciente, [target.name]: target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="mensaje" className="block text-gray-700 uppercase">
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="mensaje"
            id="mensaje"
            placeholder="Describe los síntomas"
            value={mensaje}
            onChange={({ target }) =>
              setPaciente({ ...paciente, [target.name]: target.value })
            }
          ></textarea>
        </div>
        <input
          type="submit"
          value={
            Object.entries(pacienteEditar).length === 0
              ? "Agregar Paciente"
              : "Editar Paciente"
          }
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};
