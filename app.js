let funcionalidadTareas = require("./funcionalidadTareas.js");
const { inquirerMenu, pause } = require("./helpers/inquirerMenu.js");

let accion = process.argv[2];
let parametroAdicional = process.argv[3];
let parametroAdicionalDos = process.argv[4];

const main = async () => {
  let option = "";

  do {
    option = await inquirerMenu();
    switch (option) {
      case "1":
        funcionalidadTareas.listar();
        break;
      case "2":
        console.log(funcionalidadTareas.buscarAuto(parametroAdicional));
        break;
      case "3":
        funcionalidadTareas.venderAuto(parametroAdicional);
        break;
      case "4":
        console.log(funcionalidadTareas.autosNuevos());
        break;
      case "5":
        console.log(funcionalidadTareas.listaDeVentas());
        break;
      case "6":
        console.log(funcionalidadTareas.autosParaLaVenta());
        break;
      case "7":
        console.log(funcionalidadTareas.totalDeVentas());
        break;
      case "8":
        let persona = {
          capacidadDePagoTotal: parametroAdicional,
          capacidadDePagoEnCuotas: parametroAdicionalDos,
        };
        console.log(funcionalidadTareas.autosQuePuedeComprar(persona));
        break;
    case "9":
        option = "0"
        break;
    }

    await pause();
  } while (option !== "0");
};

main();
