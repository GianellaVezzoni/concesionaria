let funcionalidadTareas = require("./funcionalidadTareas.js");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirerMenu.js");

let parametroAdicional = process.argv[3];
let parametroAdicionalDos = process.argv[4];

const main = async () => {
  let option = "";
  let userDescription = "";

  do {
    option = await inquirerMenu();
    switch (option) {
      case "1":
        funcionalidadTareas.listar();
        break;
      case "2":
        userDescription = await readInput("Patente: ");
        funcionalidadTareas.buscarAuto(userDescription);
        break;
      case "3":
        userDescription = await readInput("Patente: ");
        funcionalidadTareas.venderAuto(userDescription);
        break;
      case "4":
        funcionalidadTareas.autosNuevos()
        break;
      case "5":
        funcionalidadTareas.listaDeVentas();
        break;
      case "6":
        funcionalidadTareas.autosParaLaVenta();
        break;
      case "7":
        funcionalidadTareas.totalDeVentas();
        break;
      case "8":
        let persona = {
          capacidadDePagoTotal: await readInput("Ingrese el precio total que está dispuesto/a a pagar: "),
          capacidadDePagoEnCuotas: await readInput("Ingrese el precio que está dispuesto/a a pagar en cuotas: "),
        };
        console.log('Auto que puede comprar: ', funcionalidadTareas.autosQuePuedeComprar(persona));
        break;
    }
    userDesciption = "";
    await pause();
  } while (option !== "9");
};

main();
