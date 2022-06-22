let operacionesArchivo = require("./helpers/operacionesArchivo.js");

let concesionaria = {
  autos: operacionesArchivo.leerArchivoJson(),

  listar: function () {
    console.log('Autos: \n', this.autos);
  },

  buscarAuto: function (patenteBuscada) {
    autoBuscado = this.autos.filter(
      (auto) => auto?.patente === patenteBuscada
    )[0];
    if(autoBuscado != undefined){
      console.log("Auto encontrado: ", autoBuscado)
      return autoBuscado;
    }else{
      console.log("No se encontró ningún auto de patente: ", patenteBuscada);
      return null;
    }
  },

  venderAuto: function (patenteBuscada) {
    let autoVendido = this.buscarAuto(patenteBuscada);
    autos = this.autos.map(function (auto) {
      if (auto?.patente == patenteBuscada) {
        auto.vendido = true;
        return auto;
      } else {
        return null;
      }
    });
    if (autoVendido !== null) {
      operacionesArchivo.grabarUnJson(JSON.stringify(autos));
      console.log("Felicitaciones, el auto ha sido vendido!");
    } 
    return;
  },

  autosParaLaVenta: function () {
    console.log("Estos autos están en venta:");
    const resultado = this.autos.filter((auto) => auto.vendido == false);
    console.log(resultado);
  },

  autosNuevos: function () {
    const autosEncontrados = this.autos.filter(auto => auto?.km == 0);
    if(autosEncontrados.length){
      return console.log("Autos 0km: \n",autosEncontrados);
    }else{
      console.log("Lo sentimos, no encontramos autos 0km");
    }
  },

  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((auto) => auto.vendido == true);
    var ventas = [];
    autosVendidos.forEach((auto) => {
      const obj = {
        nombre: auto.marca,
        modelo: auto.modelo,
        kilometros: auto.km,
        precio: `$ ${auto.precio}`
      }
      ventas.push(obj);
    });
    ventas.length ? console.log('Autos vendidos: ', ventas) : console.log('Actualmente no hay autos en venta');
  },

  totalDeVentas: function () {
    const ventas = this.autos.filter((auto) => auto.vendido == true);
    let subtotal = 0;
    ventas.forEach(item => {
      subtotal = subtotal + item.precio;
    })
    console.log('Total de ventas: $', subtotal)
  },

  puedeComprar: function (auto, persona) {
    return (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    );
  },

  autosQuePuedeComprar: function (persona) {
    let autosALaVenta = this.autos.filter((auto) => auto.vendido == false);
    let autosComprables = autosALaVenta.filter(function (auto) {
      return concesionaria.puedeComprar(auto, persona);
    });
    return autosComprables;
  },
};

module.exports = concesionaria;
