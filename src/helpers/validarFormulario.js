import { v4 as uuidv4 } from "uuid";
export const validarFormulario = (
  { mascota, propietario, email, alta, mensaje },
  event,
  setError,
  setPacientes,
  pacientes,
  setPaciente,
  pacienteEditar,
  setPacienteEditar
) => {
  event.preventDefault();
  //   const { mascota, propietario, email, alta, mensaje } = paciente;
  if ([mascota, propietario, email, alta, mensaje].includes("")) {
    setError(true);
    return;
  }
  setError(false);

  const nuevoPaciente = {
    mascota,
    propietario,
    email,
    alta,
    mensaje,
  };
  if (pacienteEditar.id) {
    nuevoPaciente.id = pacienteEditar.id;
    const pacientesActualizados = pacientes.map((pa) =>
      pa.id === pacienteEditar.id ? nuevoPaciente : pa
    );
    setPacientes(pacientesActualizados);
    setPacienteEditar({})
  } else {
    nuevoPaciente.id = uuidv4();
    setPacientes([...pacientes, nuevoPaciente]);
  }

  setPaciente({
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    mensaje: "",
  });
};
