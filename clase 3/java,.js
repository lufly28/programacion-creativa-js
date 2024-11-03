function contraseñaValida(contrasenaIngresada) {
    // Define las contraseñas válidas
    const contrasenasValidas = ["contraseña1", "contraseña2"];

    // Verifica si la contraseña ingresada coincide con alguna de las válidas
    if (contrasenasValidas.includes(contrasenaIngresada)) { 
        console.log("La contraseña es correcta.");
    } else {
        console.log("La contraseña es incorrecta.");
    }
}

  // Ejemplo de uso:
  const contraseñaAVerificar = "contraseña1";
  contraseñaValida(contraseñaAVerificar);

// Solicitar la contraseña al usuario
const contraseñaIngresada = prompt("Ingrese su contraseña:");


// Llamar a la función de validación
contraseñaValida(contraseñaIngresada);

// punto 2
const edadIngresada = parseInt(prompt("ingrese su edad: "));

const ingresosEgresados = parseFloat (prompt ("Ingrese su ingreso numerico, sin signo $:  "));


function calculoImpuestos(edadIngresada,ingresosEgresados) {
    if(edadIngresada >= 18 && ingresosEgresados >= 1000){
        return ingresosEgresados * 0.4;
    } else {
        return 0;
    }

}

const impuestosDados = calculoImpuestos(edadIngresada,ingresosEgresados);
console.log("El impuesto a pagar es: ", impuestosDados);

// punto 3
// ... (resto del código)

// Seleccionamos los elementos del HTML que vamos a utilizar
const contador = document.getElementById('valor');
const botonIncrementar = document.querySelector('.boton');
const botonDecrementar = document.querySelector('.boton');

// Inicializamos el valor del contador
let valorContador = 0;

// Función para incrementar el contador
function incrementar() {
  valorContador++;
  contador.textContent = valorContador;
}

// Función para decrementar el contador
function decrementar() {
  valorContador--;
  contador.textContent = valorContador;
}

// Asociamos las funciones a los eventos de clic de los botones
botonIncrementar.addEventListener('click', incrementar);
botonDecrementar.addEventListener('click', decrementar);


// punto 4 