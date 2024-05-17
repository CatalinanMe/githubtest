/* Es un bloque de codigo al que nombramos y al que podemos llamar o invocar, las veces que yo necesite


function nombre_funcion(parametro1, parametro2..) {
    //codigo
    return valor/variable;
    }

*/

function saludo() {
  console.log("Hola");
  console.log("como estas?");
}

saludo();

function saludo_nombre(nombre) {
  console.log(`Hola ${nombre}!`);
}

saludo_nombre("Elena");
saludo_nombre("Juana");

function saludo_especial(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}!`);
}

saludo_especial("Elena", "De Troya");

function sumatoria(num1, num2) {
  return num1 + num2;
}
var resultado = sumatoria(10, 20);
console.log(resultado * 2);
