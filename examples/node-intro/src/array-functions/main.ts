
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
// const llaveDeAgrupacion = 'color';
// const perrosPorColor: {
//     [key in Color]?: Perro[]
// } = {};

// for (const perro of perros) {
    
//     const colorDePerro = perro[ llaveDeAgrupacion ];

//     if ( !(colorDePerro in perrosPorColor) )
//         perrosPorColor[ colorDePerro ] = [];

//     perrosPorColor[ colorDePerro ].push( perro );
// }

// console.log(perrosPorColor);

// destructuring con arreglos (en lugar de concat)
// const perrosMasUno = perros.concat({ nombre: 'Khaly', color: 'cafe', edad: 2 });
// const perrosMasUno = [ ...perros, { nombre: 'Khaly', color: 'cafe', edad: 2 } ];
// console.log( perrosMasUno );

// destructuring con objetos (en lugar de Object.assign)
// const perroConEntrenado = Object.assign({}, perros[0], { entrenado: true });
// const perroConEntrenado = { ...perros, entrenado: true };
// console.log(perroConEntrenado);

// destructuring con argumentos de una funcion
// function miFunc(a: number, b: number, c: number) {
//     return a + b + c;
// }

// const suma = miFunc(1, 2, 3);

// const args = [ 1, 2, 3 ];
// // @ts-ignore
// const suma = miFunc( ...args );
// console.log(suma);

// reduce
// const listaDePrecios = [ 1000, 2000, 7000 ];
// const sumaDePrecios = listaDePrecios.reduce( (acc, cur) => cur + acc, 0 );
// console.log( sumaDePrecios );

// const listaDeCompras = [
//     { nombre: 'manzana', precio: 500 },
//     { nombre: 'pan', precio: 1000 },
//     { nombre: 'atun', precio: 1500 }
// ];
// const sumaDePrecios = listaDeCompras.reduce( (acc, cur) => acc + cur.precio, 0 );
// console.log( sumaDePrecios );



/*
    Ejercicios:

    Abajo verá tipos de datos llamados 'ItemMenu' y 'Categoria', un arreglo llamado 'menu', y un objeto llamado 'promociones'. 
    Utilizando estos recursos, complete lo siguiente:

    1.  Cree una función 'getItemPorNombre' que encuentre un ítem del menú por nombre. El nombre es un parámetro de la función, y la función devuelve el ítem
        encontrado si existe.

    2.  Cree una variable 'bebidas' que contenga todos ítems en la categoría 'bebida'.

    3.  Cree una variable 'menuPorPrecio' que contenga el menú ordenado por precio descendentemente.

    4.  Cree una variable 'opciones' que contenga únicamente los nombres de los ítemes del menú, ordenados alfabéticamente.

    5.  Suponga que los descuentos se suman (si varios aplican para el mismo item). Cree una variable 'menuFullDescuentos' que contenga los items del menú con todos los descuentos aplicados.

*/

type Categoria = 'plato fuerte' | 'adicional' | 'postre' | 'bebida';

type ItemMenu = {
    nombre: string,
    categoria: Categoria,
    precio: number
}

const menu: ItemMenu[] = [
    {
        nombre: 'hamburguesa',
        categoria: 'plato fuerte',
        precio: 5000
    },
    {
        nombre: 'coca cola',
        categoria: 'bebida',
        precio: 1000
    },
    {
        nombre: 'pinto con huevo',
        categoria: 'plato fuerte',
        precio: 3000
    },
    {
        nombre: 'crepa de pollo',
        categoria: 'plato fuerte',
        precio: 3500
    },
    {
        nombre: 'papas fritas',
        categoria: 'adicional',
        precio: 1350
    },
    {
        nombre: 'tres leches',
        categoria: 'postre',
        precio: 1800
    },
    {
        nombre: 'cafe',
        categoria: 'bebida',
        precio: 800
    },
    {
        nombre: 'horchata',
        categoria: 'bebida',
        precio: 800
    },
    {
        nombre: 'flan de coco',
        categoria: 'postre',
        precio: 1100
    },
    {
        nombre: 'sopa azteca',
        categoria: 'plato fuerte',
        precio: 2500
    }
];

const promociones: { 
    [ key: string ]: { 
        categoria: Categoria, 
        porcentajeDescuento: number 
    }
} = {
    clienteFrecuente: {
        categoria: 'plato fuerte',
        porcentajeDescuento: 15
    },
    semanaSanta: {
        categoria: 'plato fuerte',
        porcentajeDescuento: 10
    },
    domingoEnLaTarde: {
        categoria: 'postre',
        porcentajeDescuento: 20
    },
};