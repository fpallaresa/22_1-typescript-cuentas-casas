class Cuenta {
    private titular: string;
    private cantidad: number;

    constructor(titular: string, cantidad: number = 0) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(cantidadIngresar: number): void {
        if (cantidadIngresar < 0) {
            console.log("ERROR: La cantidad introducida es negativa");
        } else {
            this.cantidad += cantidadIngresar;
        }
    }

    retirar(cantidadRetirar: number): void {
        if (cantidadRetirar < 0) {
            console.log("ERROR: La cantidad introducida es negativa");
        } else if (cantidadRetirar > this.cantidad) {
            console.log("ERROR: No tienes dinero suficiente para retirar esa cantidad");
        } else {
            this.cantidad -= cantidadRetirar;
        }
    }

    mostrar(): void {
        console.log("--------------------------");
        console.log("Datos de la cuenta:");
        console.log("Titular:", this.titular);
        console.log("Cantidad:", this.cantidad);
        console.log("--------------------------");
    }
}

const cuenta1: Cuenta = new Cuenta("Pedro", 2000);
const cuenta2: Cuenta = new Cuenta("Juan");

// Las cuentas se inician con los valores del constructor
cuenta1.mostrar();
cuenta2.mostrar();

// Ingresamos 300€ a la cuenta 1
cuenta1.ingresar(300);
cuenta1.mostrar();

// Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
cuenta2.ingresar(-200);
cuenta2.mostrar();

// Retiramos 500€ de la cuenta 1 y la vemos tras la operación
cuenta1.retirar(500);
cuenta1.mostrar();

// Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
cuenta1.retirar(4000);
cuenta1.mostrar();