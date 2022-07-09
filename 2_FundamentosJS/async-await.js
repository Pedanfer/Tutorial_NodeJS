const empleados = [
  { id: 1, nombre: "Fernando" },
  { id: 2, nombre: "Tomás" },
  { id: 3, nombre: "Lucía" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((empleado) => empleado.id === id);
    empleado
      ? resolve(empleado.nombre)
      : reject(`Empleado con id ${id} no existe`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id === id);
    salario
      ? resolve(salario.salario)
      : reject(`Empleado con id ${id} no tiene salario`);
  });
};

const getInfoUsuario = async (id) => {
  try {
    return `Nombre del empleado ${await getEmpleado(
      id
    )}, salario: ${await getSalario(id)}`;
  } catch (err) {
    throw err;
  }
};

const id = 4;
getInfoUsuario(id)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
