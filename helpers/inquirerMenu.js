const inquirer = require("inquirer");
require('colors');

const menuOptions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Listar autos'
      },
      {
        value: '2',
        name: '2. Buscar auto por patente'
      },
      {
        value: '3',
        name: '3. Vender auto'
      },
      {
        value: '4',
        name: '4. Listar autos 0km'
      },
      {
        value: '5',
        name: '5. Listar autos vendidos'
      },
      {
        value: '6',
        name: '6. Listar autos en venta'
      },
      {
        value: '7',
        name: '7. Ver total de las ventas'
      },
      {
        value: '8',
        name: '8. Comprar auto'
      },
      {
        value: '9',
        name: '9. Salir'
      }
    ]
  }
];

const inquirerMenu = async() => {
  console.clear();
  console.log("=========================================");
  console.log("Seleccione una opción");
  console.log("=========================================\n");

  const {opcion} = await inquirer.prompt(menuOptions);
  return opcion;
}

const pause = async() => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`
    }
  ];
  await inquirer.prompt(question);
}

const readInput = async(message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if(value.length === 0){
          return 'Por favor ingrese un valor;'
        }
        return true;
      }
    }
  ]

  const {desc} = await inquirer.prompt(question);
  return desc;
}

module.exports = {
  inquirerMenu,
  readInput,
  pause
}