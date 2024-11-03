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
