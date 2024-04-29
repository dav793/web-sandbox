
export class Pajaro {

    private _nombre: string;
    get nombre() { return this._nombre; }
    set nombre(valor) { this._nombre = valor; }

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    cantar() {
        console.log('no se como cantar');
    }

};

export type ColorDeAutomovil = 'negro'|'blanco';

export interface Automovil {
    modelo: string;
    color: ColorDeAutomovil;
};

export const miAutomovil: Automovil = {
    modelo: 'Pathfinder',
    color: 'negro'
};
