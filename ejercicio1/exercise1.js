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



