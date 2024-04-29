
// clases 

class Ave {

    static Reproduccion = 'oviparo';

    private _nombre: string;
    get nombre() { return this._nombre; }
    set nombre(valor) { this._nombre = valor; }
    
    color: 'negro'|'cafe'|'mixto';
    dieta: 'carnivoro'|'herbivoro'|'omnivoro';
    vuela: boolean;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    cantar() {
        console.log('no se como cantar');
    }

};

// console.log( Ave.Reproduccion );

// const gorrion: Ave = new Ave('gorrion');
// gorrion.nombre = 'cosa';
// console.log( gorrion.nombre );
// gorrion.cantar();


// herencia

class Gallina extends Ave {

    constructor() {
        super('gallina');
    }

    cantar() {
        console.log('pio pio');
    }

}

const gallina = new Gallina();
gallina.cantar();


// clases abstractas

abstract class AveBase {
    abstract cantar(): void;
}

class Halcon implements AveBase {
    cantar() {
        console.log('kak, kak, kak');
    }
}

