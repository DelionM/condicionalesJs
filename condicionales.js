// ejemplo 1 solo mostrare un ejemplo básico de su estructura, me apoyare de un objeto 
const usuario = {
    nombre: 'Juan',
    edad: 21,
    ticket: false
}

if (usuario.edad > 18 ){
    console.log('Es mayor de edad, yupii');
} else {
    console.log('No puede entrar al consierto 😥');
}

//ejemplo 2 
if(usuario.edad > 18 && usuario.ticket){
    console.log('El usuario es mayor de edad y tiene ticket');
}
else{
    console.log('No puede entrar al concierto 😥')
}

//ejemplo 3 anidar condicionales
if (usuario.edad >=18){
    if (usuario.ticket === true){
        console.log('El usaurio es mayor de edad y si tiene ticket');
    } else{
        console.log("El usuario no tiene el ticket pero si es mayor de edad");
    }    
} else{
    console.log('No es mayor de edad');
}

//ejemplo 4 elseif  
// aquí lo agregue al objeto de una forma diferente tal y como lo mostré en el archivo objetos.js
usuario.pais = 'México';

if (usuario.pais === 'México'){
    console.log('el usuario es mexicano');
} else if (usuario.pais === 'Colombia'){
    console.log('el usuario es colombiano');
} else if (usuario.pais === 'Argentina'){
    console.log('el usuario es argentino');
} else {
    console.log(`no soy ninguno de los tres`);
}