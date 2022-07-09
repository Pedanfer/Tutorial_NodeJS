const empleados = [
  { id: 1, nombre: "Fernando" },
  { id: 2, nombre: "Tomás" },
  { id: 3, nombre: "Lucía" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((empleado) => empleado.id === id);
  if (!empleado) {
    callback("Error", `Empleado con id ${id} no existe`);
    return;
  }
  callback(null, empleado);
};

const getSalario = (id, callback) => {
  //Null check operator
  const salario = salarios.find((salario) => salario.id === id);
  if (salario) {
    callback(null, salario.salario);
    return;
  }
  callback(`Empleado con id ${id} no existe o no tiene salario`);
};

getEmpleado(2, (error, empleado) => {
  if (error) {
    console.log("ERROR");
    return console.log(error);
  }

  getSalario(empleado.id, (error, salario) => {
    if (!error) {
      return console.log(
        `El empleado ${empleado.nombre} tiene un salario de ${salario}`
      );
    }
    console.log(error);
  });
});
/*getSalario(id, (error, salario) => {
  console.log(salario);
});*/
