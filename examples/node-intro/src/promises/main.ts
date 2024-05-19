
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
fetch('http://example.com/movies.json')
    .then( response => response.json() )
    .then( json => console.log(json) );