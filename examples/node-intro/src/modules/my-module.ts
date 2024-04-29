
export class Ave {

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

export type Color = 'negro'|'blanco';

export interface Carro {
    modelo: string;
    color: Color;
};

export const miCarro: Carro = {
    modelo: 'Pathfinder',
    color: 'negro'
};

export default {
    Ave: Ave,
    miCarro: miCarro
};