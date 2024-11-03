const root = document.getElementById("root");

/*
1. Crea una variable `nombre` y asígnale tu nombre.
2. Crea una variable `edad` y asígnale tu edad.
3. Crea una variable `esEstudiante` y asígnale `true` si eres estudiante o `false` si no lo eres.
4. Crea una variable `mensaje` que contenga un saludo personalizado utilizando literales de plantilla.
5. Imprime el mensaje en la consola del navegador.
*/

// Escribe la solución aquí ✏️
let Nombre = "Florencia Gira";
let Edad = 18;
let esEstudiante = true;

let mensaje = `Hola, mi nombre es ${Nombre} y tengo ${Edad} años. Soy estudiante ${esEstudiante}`;

function printPersonalDataList(message) {
  const personalDataList = document.createElement("p");
  personalDataList.textContent = message;
  document.body.appendChild(personalDataList);
}

printPersonalDataList(mensaje);

// actividades del repositorio

// 1. Completa el array colores con los colores rojo, verde y azul.

let cOlores = ["rojo", "verde", "azul"];

// 2.Añade el color amarillo al final del array
cOlores.push ("Amarillo");
console.log(cOlores);

// 3. Elimina el color verde del array.
cOlores.pop("verde");
console.log(cOlores);

// 4. Completa el objeto producto con las propiedades nombre, precio, stock y disponible.
let producto0 = {
    nombre: "camisa",
    precio: 100,
    stock: 10,
    disponible: true,
};


// 5. Añade la propiedad descripción al objeto producto con el valor "Camiseta de algodón".

producto0.descripcion = `camisa de algodon`;


// 6. Muestra la descripción del producto en la consola.
console.log(producto0.descripcion);


// 7. Crea un método mostrarStock en el objeto producto que imprima el stock del producto en la consola.
producto0.mostrarStock = function() {
    console.log(`El stock del producto de la ${this.nombre} es  ${this.stock}`);  
};

// 8. Muestra el stock del producto en la consola.

producto0.mostrarStock();