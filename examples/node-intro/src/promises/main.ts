
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
// fetch('https://jsonplaceholder.typicode.com/todos')
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
