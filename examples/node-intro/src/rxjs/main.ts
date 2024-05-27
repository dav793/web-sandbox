import { Observable, from, Subject } from 'rxjs';

/*
Observables:
	- Corta-vida: Emite uno o pocos valores y se completa.
	- Larga-vida Emita muchos valores y no se completa o dura mucho en completar.

	- Cold: Empieza a emitir valores hasta que alguien se suscribe. (ej. request HTTP)
	- Hot: Emite valores independientemente de si tiene suscriptores. (ej. canal de TV)
*/

// new Promise((resolve, reject) => {
//     resolve('hola mundo');
//     reject( new Error('Oh no!') );
// });

// // Ej 1. Un observable que emite 'hola mundo'
// const miObs = new Observable((observer) => {
//     observer.next('hola mundo');            // emitir valor
//     observer.error( new Error('Oh no!') );  // emitir error
//     observer.complete();                    // completar
// });

// // como suscribirse? 
// // opcion 1:
// // miObs.subscribe((valor) => {
// //     // manejar valor escuchado
// //     console.log(valor);
// // });

// // opcion 2:
// miObs.subscribe({
//     next: (valor) => console.log(valor),
//     error: (err) => console.error(err),
//     complete: () => console.log('completado')
// });

// Ej2. Un observable que emite 3 valores sucesivamente
// const miObs = new Observable((observer) => {
//     observer.next(1);          
//     observer.next(2);
//     observer.next(3);
// });

// const miObs = from([1, 2, 3]);

// miObs.subscribe(x => console.log(x));

// Ej3. Casos de uso de operador 'from'

// const miObs = from(['hola mundo']);   // emitir un solo valor

// const miObs = from([1, 2, 3]);  // emitir una serie de valores sucesivamente

// const miPromise = Promise.resolve('hola mundo');
// const miObs = from(miPromise);  // convertir un promise en un observable

// miObs.subscribe(x => console.log(x));
