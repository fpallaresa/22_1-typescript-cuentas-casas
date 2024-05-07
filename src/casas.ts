enum TipoCasa {
    CHALET,
    PISO
}

class Persona {
    public nombre: string;
    public dineroDisponible: number;

    constructor(nombre: string, dineroDisponible: number) {
        this.nombre = nombre;
        this.dineroDisponible = dineroDisponible;
    }

    getInfo(): void {
        console.log(`Nombre: ${this.nombre} / Dinero disponible: ${this.dineroDisponible}`);
    }
}

class Casa {
    public precio: number;
    public tipo: TipoCasa;

    constructor(precio: number, tipo: TipoCasa) {
        this.precio = precio;
        this.tipo = tipo;
    }

    comprar(compradores: Persona[]): void {
        const dineroTotal = compradores.reduce((total, comprador) => total + comprador.dineroDisponible, 0);
        if (dineroTotal >= this.precio) {
            const precioPorPersona = this.precio / compradores.length;
            compradores.forEach(comprador => {
                comprador.dineroDisponible -= precioPorPersona;
            });
            console.log("Casa comprada!");
        } else {
            console.log("ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.");
        }
    }
}

const juan: Persona = new Persona("Juan", 100000);
const maria: Persona = new Persona("María", 120000);
const paula: Persona = new Persona("Paula", 30000);
const chalet1: Casa = new Casa(80000, TipoCasa.CHALET);
const piso1: Casa = new Casa(60000, TipoCasa.PISO);

// Situación de cada uno antes de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();

// Transacciones
chalet1.comprar([juan, maria]); // Debería comprar el chalet
piso1.comprar([paula]); // Debería fallar, no tiene dinero suficiente

// Situación de cada uno después de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();
