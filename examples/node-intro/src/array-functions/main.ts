
// find, findIndex, (for, forEach, for...of, for...in), map, filter, reduce, sort, groupby

const numeros = [ 2, 3, 41, 76, 2, 11 ];

// find (primitives)
// console.log(
//     numeros.find( elem => elem === 3 )
// );

// find index (primitives)
// console.log(
//     numeros.findIndex( elem => elem === 3 )
// );

const objetos = [
    { id: 1, nombre: 'Oscar', pin: '1234' }, 
    { id: 2, nombre: 'Maria', pin: '1111' },
    { id: 3, nombre: 'Angelica', pin: '9876' },
];

// find (objects)
// console.log(
//     objetos.find( elem => elem.id === 2 )
// );

// console.log(
//     objetos.findIndex( elem => elem.id === 2 )
// );

// console.log(
//     objetos.findIndex(elem => {
//         return elem.id === 2;
//     })
// );

// map
// const nombres = objetos.map(elem => {
//     return elem.nombre;
// });
// console.log(nombres);

// const objetosSinPin = objetos
//     .map( elem => ({ 
//         id: elem.id,
//         nombre: elem.nombre 
//     }) );
// console.log(objetosSinPin);

type Color = 'cafe' | 'negro' | 'blanco';
type Perro = {
    nombre: string,
    color: Color,
    edad: number
};

const perros: Perro[] = [
    { nombre: 'Firulais', color: 'cafe', edad: 2 },
    { nombre: 'Bruno', color: 'negro', edad: 1 },
    { nombre: 'Tuky', color: 'blanco', edad: 4 },
    { nombre: 'Mimi', color: 'cafe', edad: 3 }
];

// const perrosCafes = perros.filter( elem => elem.color === 'cafe' );
// console.log( perrosCafes );

// const segundoPerroCafe = perros.filter( elem => elem.color === 'cafe' )[1];
// console.log( segundoPerroCafe );

// const nombresDePerrosCafes = perros
//     .filter( elem => elem.color === 'cafe' )
//     .map( elem => elem.nombre );
// console.log(nombresDePerrosCafes);

// ciclos for
// for (let i = 0; i < perros.length; ++i) {
//     perros[i].color = 'cafe';
// }
// console.log(perros);

// ciclos forEach
// perros.forEach(elem => elem.color = 'cafe');
// console.log(perros);

// ciclos for..of 
// for (const elem of perros) {
//     elem.color = 'cafe';
// }
// console.log(perros);

// ciclos for..in
// const primerPerro = perros[0];
// for (const llave in primerPerro) {
//     console.log( 
//         (primerPerro as any)[llave] 
//     );
// }

// acceder propiedades de objetos
// const primerPerro = perros[0];
// const nombreDePropiedad = 'nombre';
// console.log( primerPerro[nombreDePropiedad] );

// sort
// const perrosOrdenados = perros.sort((a, b) => b.edad - a.edad);
// const perrosOrdenados = perros.sort((a, b) => {
    
//     const diferencia = a.edad - b.edad;

//     if (diferencia < 0)
//         return 1;
//     else if (diferencia > 0)
//         return -1;
//     else
//         return 0;
// });
// const perrosOrdenados = perros.sort((a, b) => {
//     if (a.nombre > b.nombre)
//         return 1;
//     else if (a.nombre < b.nombre)
//         return -1;
//     return 0;
// });
// console.log(perrosOrdenados);

// groupby manual
const llaveDeAgrupacion = 'color';
const perrosPorColor: {
    [key: string]: Perro[]
} = {};

for (const perro of perros) {
    
    const colorDePerro = perro[ llaveDeAgrupacion ];

    if ( !(colorDePerro in perrosPorColor) )
        perrosPorColor[ colorDePerro ] = [];

    perrosPorColor[ colorDePerro ].push( perro );
}

console.log(perrosPorColor);