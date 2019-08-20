const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(40.750000,-74.000000)
// .then(console.log)
// .catch(console.log);

const getInfo = async (direccion) => {
    
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
    //Salida
    //El clima de xxxxx es de x
    ///No se pudo determinar el clima de XXXX
};

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);