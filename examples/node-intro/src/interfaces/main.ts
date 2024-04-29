
interface Perro {
    nombre: string;
    color: 'cafe'|'negro'|'blanco'|'manchado';
    ladrar: () => void;
}

interface Dalmata extends Perro {
    color: 'manchado';
}

const miDalmata: Dalmata = {
    nombre: 'Smokey',
    color: 'manchado',
    ladrar: () => {
        console.log('guau');
    }
};
