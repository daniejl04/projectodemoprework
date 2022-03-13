//codigo del cuadraro

console.group("cuadrado");
//const ladocuadrado = 5;
//console.log ("los lados del cuadrado miden: " + ladocuadrado + "cm");


//const perimetrocuadrado = ladocuadrado * 4;
//console.log ("el perimetro del cuadrado es: " + ladocuadrado + "cm");
function perimetrocuadrado(lado) {
    return lado * 4;
}

//const areacuadrado = ladocuadrado * ladocuadrado;
//console.log ("el area del cuadrado es: " + ladocuadrado + "cm^2");
function areacuadrado(lado) {
    return lado * lado; 
}

console.groupEnd();

// codigo del triangulo
console.group("triangulo")
//const ladotriangulo1 = 5;
//const ladotriangulo2 = 5;
//const basetriangulo = 4;

//console.log ("los lados del triangulo miden: " 
//+ ladotriangulo1 
//+ "cm," 
//+ ladotriangulo2 
//+ "cm," 
//+ basetriangulo 
//+ "cm" );

//const alturatriangulo= 5.5;
//console.log ("la altura del triangulo es de " + alturatriangulo + "cm,"  );

//const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
//console.log("el perimetro del triangulo es:" + perimetrotriangulo + "cm");

function perimetrotriangulo( lado1, lado2, base) {
    return lado1 + lado2 + base;    
}

//const areatriangulo = (basetriangulo * alturatriangulo) / 2;
//console.log("el area del triangulo es: " + areatriangulo + "cm^2");
function perimetrotriangulo(base, altura) {
    return (base * altura) / 2;   
}
console.groupEnd();

// codigo del circulo

console.group("circulos");

//const radiocirculo = 4;
//console.log ("el radio del circulo es: "  + radiocirculo + "cm");

//const diametrocirculo = radiocirculo * 2;
//console.log ("el diametro del circulo es: "  + diametrocirculo +  "cm");
function diametrocirculo(radio) {
    radio * 2;
}
const PI = Math.PI;
console.log (" PI es: "  + PI +  "cm");

//const perimetrocirculo = diametrocirculo * PI;
//console.log ("el perimetro del circulo es: "  + perimetrocirculo +  "cm");

function perimetrocirculo(radio) {
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}

//const areacirculo = (radiocirculo * radiocirculo) * PI;
//console.log ("el area del circulo es: "  + areacirculo +  "cm");
function areacirculo(radio){
   return (radio * radio) * PI;
}
console.groupEnd();


//interacion html
function calcularPerimetroCuadrado(){
     const input = document.getElementById("inputcuadrado");
     const value = input.value;
     
     const perimetro = perimetrocuadrado(value);
     alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;
    
    const area = areacuadrado(value);
    alert(area);
}