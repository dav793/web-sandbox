import { Observable, from, map } from 'rxjs';

// Ejemplo basico
// const miOperador = <T>(src: Observable<T>): Observable<T> => {
//     return src;
// }

// from([ 'hola', 'mundo' ])
//     .pipe( miOperador )
//     .subscribe( x => console.log(x) );


// Ejemplo operador que multiplica los valores por 10
// const miOperador2 = (src: Observable<number>): Observable<number> => {
//     return src.pipe(
//         map(x => x * 10)
//     );
// }

// from([ 1, 2, 3 ])
//     .pipe( miOperador2 )
//     .subscribe( x => console.log(x) );

// Ejemplo operador WithLast
class WithLast {

    lastValue: any = undefined;

    any() {
        return <T>(src: Observable<T>): Observable<[T, T|undefined]> => {
         
            return src.pipe(
                map(srcValue => {

                    const lastValue = this.lastValue;
                    this.lastValue = srcValue;

                    return [ srcValue, lastValue ];
                })
            );

        }
    }

    filter<T>(predicate: (value: T) => boolean) {
        return (src: Observable<T>): Observable<[T, T|undefined]> => {

            return src.pipe(
                map(srcValue => {

                    const lastValue = this.lastValue;
                    if ( predicate( srcValue ) )
                        this.lastValue = srcValue;

                    return [ srcValue, lastValue ];
                })
            );

        }
    }
}

// from([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
//     .pipe( 
//         new WithLast().any() 
//     ).subscribe( x => console.log(x) );

from([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
    .pipe( 
        new WithLast().filter( x => x > 5 ) 
    ).subscribe( x => console.log(x) );
