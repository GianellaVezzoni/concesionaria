require('colors');

const showMenu = () => {
  return new Promise(resolve => {
    console.log("=========================================".bgMagenta)
    console.log("Seleccione una opción".bgMagenta)
    console.log("=========================================\n".bgMagenta)
  
    console.log(`${'1.'.bgMagenta} Crear tarea`);
    console.log(`${'2.'.bgMagenta} Listar tareas`);
    console.log(`${'3.'.bgMagenta} Listar tareas completadas`);
    console.log(`${'4.'.bgMagenta} Listar tareas pendientes`);
    console.log(`${'5.'.bgMagenta} Completar tarea(s)`);
    console.log(`${'6.'.bgMagenta} Borrar tarea`);
    console.log(`${'0.'.bgMagenta} Salir \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('\nSeleccione una opción: \n', (opt) => {
      readline.close();
      resolve(opt);
    })
  });
}

const pause = () => {
  return new Promise (resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readline.question(`Presione ${'ENTER'.blue} para continuar`, (opt) => {
      readline.close();
    });
    resolve();
  });
}

module.exports = {
  showMenu,
  pause
}