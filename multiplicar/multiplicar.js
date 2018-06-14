const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base,limite) =>
{
    return new Promise ((resolve,reject)=> {

        if( !Number(base))
        {
            reject (`La base introducida ${base} no es un numero`);
            return;
        }
        if( !Number(limite))
        {
            reject (`El limite introducido ${limite} no es un numero`);
            return;
        }
        if(Number(base) && Number(limite))
        {

            console.log('=============='.green);
            console.log(`=TABLA DEL ${base}=`.blue);
            console.log('=============='.green);
            
            let data = '';
            for(let i = 1; i<=limite;i++)
                {                
                data+= `${base} * ${i} = ${base*i}\n`;
                }                
            resolve(data);
        }
    });
}

let CrearArchivo = (base,limite) => {

    return new Promise ((resolve,reject)=> {

    if( !Number(base))
    {
        reject (`El valor introducido ${base} no es un numero`);
        return;
    }
    
    let contenido = "";   

    for(let i = 1; i<=limite;i++)
        {
        contenido += `${base} * ${i} = ${base*i} \n`; 
        //console.log(`${base} * ${i} = ${base*i}`);
        }

    fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
        if (err)
            reject(err);
        else
            resolve(`tabla-${base}.txt`);
});
});
}

module.exports = {
        CrearArchivo,
        ListarTabla,
}