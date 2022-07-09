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

const id = 4;

/* Promise hell
getEmpleado(id)
  .then((empleado) => {
    getSalario(id)
      .then((salario) => {
        console.log(
          `El empleado ${empleado} tiene un sueldo de ${salario} euros`
        );
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
  */

//Concatenación de promesas con los return, sólo necesitan un catch
let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre} tiene un sueldo de ${salario} euros`)
  )
  .catch((err) => console.log(err));
