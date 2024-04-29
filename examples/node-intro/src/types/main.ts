
// Tipos basicos

type Color = 'cafe' | 'blanco' | 'negro' | 'manchado';

type Perro = {
    nombre: string,
    edad: number,
    color: Color,
    duenos: string[],
    fechaVacunacion?: string
};
type PerroConCastrado = Perro & { castrado: boolean };

const miPerro: PerroConCastrado = {
    nombre: 'Firulais',
    edad: 3,
    color: 'negro',
    duenos: ['Maria', 'Carlos'],
    castrado: true
};

const esCastrado = (miPerro as PerroConCastrado).castrado;


// Funciones

function ladrar() {
    console.log('guau');
}

const ladrar2 = function () {
    console.log('guau 2');
}
const ladrar3 = ladrar2;

const ladrar4 = (idioma: 'ES'|'ENG'): string => {
    if (idioma === 'ES')
        return 'guau';
    else if (idioma === 'ENG')
        return 'woof';
}

function cargarDatos(
    manejarError: (error: string) => string
) {

    // hacer request al api
    let respuesta;
    let error = 'Algo salio mal';

    if (respuesta)
        return respuesta;
    else if (error)
        manejarError(error);
}

const manejadorDeErrores = function(error: string) {
    throw new Error(error);
};

// cargarDatos(manejadorDeErrores);


/*
    Ejercicios
    1: Crear un proyecto basico con node y typescript:
        - Usando concurrently y nodemon para observar cambios y recompilar/re-ejecutar.
        - Produciendo el build en una carpeta "dist".
        - Con un .gitignore que evite que se suban archivos innecesarios al repo (dist y node_modules).

    2: Crear un script donde defina:
        - Un tipo 'Identificacion' que sea numérico o texto.
        - Un tipo 'Desarrollador' que contenga las siguientes propiedades:
            - id ('Identificación')
            - nombre (texto)
            - fecha de contratación (fecha / texto)
            - salario (numérico)
        - Un tipo 'Supervisor' que contenga las mismos propiedades que 'Desarrollador' y además contenga la siguiente propiedad:
            - subalternos (arreglo de 'Identificación')
        - Una función 'pagarAEmpleado' con las siguientes características:
            - Recibe un parámetro 'empleado' de tipo 'Desarrollador' o 'Supervisor'.
            - Imprime en consola 'Se pagó SALARIO al empleado ID' donde SALARIO es el salario del empleado y ID es la 'Identificación' del empleado.
            - Si el empleado tiene subalternos, imprime en consola: 'El empleado tiene NUM_SUBALTERNOS' donde NUM_SUBALTERNOS es la cantidad de subalternos que tiene.
                - Para esto investigue cómo determinar si una propiedad existe en un objeto de Javascript.
    
    3. En el mismo script, ejecute las siguientes tareas:
        - Cree 2 desarrolladores y 1 supervisor con los 2 desarrolladores como subalternos.
        - Llame la función 'pagarAEmpleado' para cada uno de los 3 empleados y compruebe el resultado en la consola.
*/