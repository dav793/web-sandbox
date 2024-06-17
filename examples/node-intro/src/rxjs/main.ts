import { Observable, Subject, from, of, interval, map, take, takeUntil, filter, catchError, switchMap } from 'rxjs';

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

// como suscribirse? 
// opcion 1:
// miObs.subscribe((valor) => {
//     // manejar valor escuchado
//     console.log(valor);
// });

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

// Ej3: Desuscribirse de un observable - forma basica
// const misStrings = ['hola', 'mundo', 'como', 'le', 'va?'];
// const suscripcion = interval(1000)
// 	.pipe(
// 		map(x => misStrings[x]),
// 		take(misStrings.length)
// 	)
// 	.subscribe(x => console.log(x));

// setTimeout(() => {
// 	suscripcion.unsubscribe();
// }, 2500);

// Ej4: Desuscribirse de un observable - operador takeUntil
// const destroyer$ = new Observable((obs) => {
// 	setTimeout(() => {
// 		obs.next();
// 		obs.complete();
// 	}, 2500);
// });

// interval(1000)
// 	.pipe(
// 		takeUntil(destroyer$)
// 	)
// 	.subscribe(x => console.log(x));

// Ej5: Cómo escribir un operador basico
// function miMap(ipt: Observable<number>): Observable<number> {
// 	return new Observable(obs => {
// 		ipt.subscribe(x => {
// 			obs.next(x * 2);
// 		});
// 	});
// }

// Ej6: Observables frios
// const coldObs = new Observable(obs => {
// 	console.log('El observable esta corriendo');

// 	setTimeout(() => obs.next(0), 0);
// 	setTimeout(() => obs.next(1), 1000);
// 	setTimeout(() => obs.next(2), 2000);
// 	setTimeout(() => obs.complete(), 3000);
// });

// coldObs.subscribe(x => console.log(`Soy suscriptor 1: ${x}`));

// setTimeout(() => {
// 	coldObs.subscribe(x => console.log(`Soy suscriptor 2: ${x}`));
// }, 500);

// Ej7: Observables calientes
// const hotObs = new Subject();
// setTimeout(() => hotObs.next(0), 0);
// setTimeout(() => hotObs.next(1), 1000);
// setTimeout(() => hotObs.next(2), 2000);
// setTimeout(() => hotObs.complete(), 3000);

// hotObs.subscribe(x => console.log(`Soy suscriptor 1: ${x}`));

// setTimeout(() => {
// 	hotObs.subscribe(x => console.log(`Soy suscriptor 2: ${x}`));
// }, 500);

// Ej8: Manejo de errores - basico
// const miObs = new Observable(obs => {
// 	obs.error( new Error(`oh no!`) );
// });

// miObs.subscribe({ 
// 	next: x => console.log(x),
// 	error: err => console.error(err)
// });

// Ej9: Manejo de errores - pipes
// from([1, 2, '$', 4])
// 	.pipe(
// 		filter(x => {
// 			if (typeof x === 'number')
// 				return true;
		
// 			throw new Error(`${x} is not a number`);
// 		})
// 	)
// 	.subscribe({
// 		next: x => console.log(x),
// 		error: err => console.error(err)
// 	});

// Ej10: Manejo de errores - pipes (continuación)
from([1, 2, '$', 4])
	.pipe(
		switchMap(x => {

			return of(x).pipe(
				filter(x => {
					if (typeof x === 'number')
						return true;
				
					throw new Error(`${x} is not a number`);
				}),
				catchError(err => {
					console.error(err);	// manejar el error
		
					return of(undefined);
				})
			);

		}),
		filter(x => typeof x === 'number')
	)
	.subscribe({
		next: x => console.log(x),
		error: err => console.error(err)
	});