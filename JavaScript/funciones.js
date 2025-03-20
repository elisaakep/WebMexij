var persona = {
    nombre : "juana",
    apellido: "her",
    edad: 25,
    direccion: {
        pais: "costa r",
        ciudad: "san jos",
        edificio: {
            nombre: "edificio principal",
            telefono: "3333-2222"
        }
    }
};


var persona = crearPersona("Marie", "Paz");

function crearFuncion(){
    return function (nombre){
        console.log("Funcion creada" + nombre);
        return function(){
            console.log("2da Funcion")
        }
    }
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();