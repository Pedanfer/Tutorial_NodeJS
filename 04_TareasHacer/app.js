import { inquirerMenu, pausa } from "./helpers/inquirer.js";
import { Tarea } from "./models/tarea.js";
import { Tareas } from "./models/tareas.js";

const main = async () => {
  let opt = "";
  do {
    opt = await inquirerMenu();

    console.log(tarea);
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
