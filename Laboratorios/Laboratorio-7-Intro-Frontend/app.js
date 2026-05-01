console.log("Hola Mundo");

//fs es el módulo que contiene las funciones para 
//manipular el sistema de archivos
const fs = require('fs');

//Se escribe el segundo parámetro en el archivo del primer parámetro
fs.writeFileSync('hola.txt', 'Hola mundo desde node');

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

const te_hackie = () => {
    console.log("jojo te hackié");
}
//setTimeout ejecuta la función recibida como primer parámetro 
//cuando hayan transcurrido los milisegundos del segundo parámetro
setTimeout(te_hackie, 7000);

console.log("¿En dónde se ejecuta esta línea?");

// 1. Función que recibe un arreglo y devuelve su promedio
function promedio(numeros) {
  let suma = 0;

  for (let numero of numeros) {
    suma += numero;
  }

  return suma / numeros.length;
}
console.log("El promedio es:", promedio(arreglo));

// 2. Función que recibe un string y lo escribe en un archivo de texto
function escribirArchivo(texto) {
  fs.writeFileSync("String.txt", texto);
  console.log("String.txt fue creado correctamente");
}


// 3. Problema 3: determinar si un número es par o impar
function EsPar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}
promedio(arreglo)
escribirArchivo("HOLAAAAAAAAAA")
console.log("El numero 15 es:", EsPar(15));
console.log("El numero 20 es:", EsPar(20));