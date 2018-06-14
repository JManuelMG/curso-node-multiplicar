const argv = require('./conf/yargs').argv;
const colors = require('colors');

const {CrearArchivo,ListarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando)
{
    case 'listar':        
        ListarTabla(argv.base,argv.limite)
        .then(Lista => console.log(`Tabla del ${argv.base} \n${Lista}`))
        .catch(e => console.log(e));
        break;
    case 'crear':
        CrearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(colors.green(`Archivo creado: ${archivo}`)))
        .catch(e => console.log(e));        
        break;
    default:
        console.log('Comando no reconocido');
}
