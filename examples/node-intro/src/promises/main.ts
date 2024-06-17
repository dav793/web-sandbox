
// Promises "viejos"

// const miPromise = new Promise((resolve, reject) => {
//     resolve('listo');
// });
// const miPromise2 = Promise.resolve('listo');

// miPromise.then(result => console.log(result));
// miPromise2.then(result => console.log(result));

// const miCadenaDePromises = Promise.resolve(
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('listo');
//         }, 1000);
//     })
// );
// miCadenaDePromises.then().then(result => console.log(result));

// const miCadenaDePromises2 = new Promise((resolve, reject) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('listo');
//         }, 1000);
//     });

//     resolve(promise);
// });

// Promises encadenados
// const miPromise = new Promise((resolve, reject) => {
//     resolve(5);
// });

// miPromise
//     .then((x: number) => x + 5)
//     .then(x => console.log(x));

// const miPromiseConError = Promise.reject( new Error('error de X tipo') );
// miPromiseConError.then(
//     result => console.log(`Exito: ${result}`),
//     error => console.error(error)
// );

// Async / await
// async function miFunc() {
//     const miPromise = Promise.resolve('hola');
//     const result = await miPromise;
//     return result;
// }

// miFunc().then(result => console.log(result));

// Promise.all
// const promise1 = Promise.resolve('hola');
// const promise2 = Promise.resolve('adios');

// Promise.all([ promise1, promise2 ])
//     .then( result => console.log(result) );

// console.log('estoy haciendo cosas');

// Fetch API data
// const miPromise = fetch('https://jsonplaceholder.typicode.com/todos')
//     .then( response => response.json() )
//     .then( json => console.log(json) );

// const jsonObj = `
//     {
//         "miArreglo": [
//             1, 
//             2, 
//             3
//         ]
//     }
// `;
// const obj = JSON.parse(jsonObj);
// console.log( obj.miArreglo[0] );

// const jsonObj2 = JSON.stringify(obj);
// console.log(jsonObj2);

// Diferencia entre async/await y promises normales
// const miPromise = new Promise((resolve, reject) => {
//     resolve('A');
// });

// promise normal:
//  - primero imprime 'B' y luego 'A'
// miPromise.then(x => console.log(x));
// console.log('B');

// promise con async/await:
//  - primero imprime 'A' y luego 'B'
// async function exec() {
//     const res = await miPromise;
//     console.log(res);
//     console.log('B');
// }
// exec();

/*
    Ejercicios:

    1. Cree un promise que, luego de esperar 2 segundos, tenga 50% de probabilidad de resolverse con el string "Exito" 
    y 50% de probabilidad de ser rechazado con el mensaje "Error!".

    Luego suscríbase al promise e imprima el resultado en consola. Esto se puede hacer de dos maneras:
    A:
        miPromise.then(
            resultado => console.log(resultado),
            error => console.error(error)
        );

    B:
        miPromise
            .then( resultado => console.log(resultado) )
            .catch( error => console.error(error) )

    Pista: Para la probabilidad puede usar el siguiente snippet:
        if ( Math.random() > 0.5 )
            // caso de éxito
        else
            // caso de fallo

    
    2. Utilice encadenamiento de promises para pasar un input numérico por la siguiente serie ordenada de operaciones matemáticas:
            1: Multiplicar por 5
            2: Restar 9
            3: Dividir entre 6

    Como ejemplo, si el input es 15 el resultado debería ser ((15 * 5) - 9) / 6 = 11

    Nota: Para poder utilizar encadenamiento de promises, cada operación debe existir como su propio promise. Es decir, el callback
    de cada "then" debe retornar un promise que ejecute la operación que sigue en la lista.


    3. Recupere en paralelo 3 'todos' del API público en jsonplaceholder.typicode.com. Luego convierta cada respuesta de JSON 
    a un objeto de Javascript e imprimalos en consola.

    Puede usar los siguientes links:
            - https://jsonplaceholder.typicode.com/todos/1
            - https://jsonplaceholder.typicode.com/todos/2
            - https://jsonplaceholder.typicode.com/todos/3

    Pista: Utilice Promise.all() para ejecutar los promises en paralelo.

    
    4. Escriba un promise que resuelva con el string "Hola" y otro promise que resuelva con el string " mundo". 
    Luego, escriba una función utilizando async/await que espere por ambos promises, concatene ambos resultados y los 
    imprima en consola. Finalmente, invoque la función y verifique que imprima "Hola mundo".

*/

// Solucion ej. 2:
function operarNumero(x: number): Promise<number> {
    return Promise.resolve(x * 5)
        .then(x => x - 9)
        .then(x => x / 6);
}

operarNumero(15)
    .then(x => console.log(x));