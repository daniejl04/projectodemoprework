
var edad = 18;

if(edad === 18){
    console.log("puedes votar denuevo");
}
else if (edad > 18){
    console.log("puedes votar denuevo");
} else {
    console.log("aun puede votar");
}



condition ? true : false;

var numero = 1;
                                     /if/
var resultado = numero === 1 ? "si soy un uno " : "no soy un uno";


var numero = 1;

switch(numero){
    case 1:
        console.log("soy uno!");
        break;
    case 10:
        console.log("soy un 10!");
        break;
    default:
        console.log("no osy nada");
    }



var frutas = ["mazana", "platano","creza", "fresa"];


console.log(frutas);

console.log(frutas.length);

console.log(frutas[2]);

var masFrutas = frutas.push("uvas");

var ultimo = frutas.pop("Uvas");

var nuevaLongitud = frutas.unshift("uvas");

var borrarFruta = frutas.shift("uvas");

var posicion = frutas.index0f("creza");



var estudiantes = ["maria","sergio","sergio","daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante); 
}

for(var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[1])
}

for(var i=0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
}

while(estudiante.length > 0){
    console.log(estudiante);
    var estudiante = estudiante.shift();
    saludarEstudiantes(estudiante);
};

var miAuto = {
    marca:"Toyota",
    modelo:"corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("tesla","modelo 3", 2020);

