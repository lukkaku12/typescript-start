const numerito: number = 0;

function checkNumber(number:number) {
    if (number > 0) {
        return 'Positivo';
    } else if (number === 0) {
        return 'Neutro';
    } else if (number < 0) {
        return 'Negativo';
    }
}

console.log(checkNumber(numerito));

let arreglo: string[] = ['pepito','pamela','miguel','lucas','elver'];

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
};
//////////////////////////////////////////////////////////////////////////////
// tarea 1
const arregloNumeros: number[] = [2,3,4,5,6,1,15,7,8];

const resultado:number = arregloNumeros.reduce((n, a) => n + a)

console.log(resultado);
 
//////////////////////////////////////////////////////////////////////////////
// tarea 2
function concatenador(arreglo:string[]) {
    console.log(arreglo.reduce((n, a) => n + a))
}

concatenador(arreglo);

//////////////////////////////////////////////////////////////////////////////
// tarea 3
const User:any[] = [
    {
        id:1,
        name:'pepito'
    },
    {
        id:2,
        name:'granito'
    },
    {
        id:3,
        name:'marcela'
    },
];

User.forEach(usuario => {
    console.log(usuario.id, usuario.name)
});

//////////////////////////////////////////////////////////////////////////////
// tarea 4

function calculaNumeroGrande(arreglo:number[]):number {
    const numMayor:number = Math.max(...arreglo)
    return numMayor
}

console.log(calculaNumeroGrande(arregloNumeros));

//////////////////////////////////////////////////////////////////////////////
// Objetos

interface Car {
    marca: string;
    modelo: string;
    anio:number;
}

let toyotica: Car = {marca:'Toyota',modelo:'Land Cruiser Prado', anio:2013}

// console.log(toyotica);

//////////////////////////////////////////////////////////////////////////////
// Tarea 2

class Carro {
    // marca:string;
    // modelo:string;
    // anio:number
    // constructor(marca:string, modelo:string, anio:number) {
    //     this.marca = marca;
    //     this.modelo = modelo;
    //     this.anio = anio;
    // }


    static returnInfoCar(Car: Car) {
        return `carro de marca ${Car.marca}, modelo ${Car.modelo}, anio ${Car.anio}`
    };
};

console.log(Carro.returnInfoCar(toyotica));

//////////////////////////////////////////////////////////////////////////////
// Tarea 3

function newYearCar(car:Car) {
    return {
        marca:car.marca,
        modelo:car.modelo,
        anio:car.anio + 1
    }
};

console.log(newYearCar(toyotica));

//////////////////////////////////////////////////////////////////////////////
// Funciones
// Tarea 1

function calculaNumeroGrande2(arreglo:number[]):number {
    const numMayor:number = Math.max(...arreglo)
    return numMayor
};

// Tarea 2

function restParams(a:number, b:number, ...args:number[]) {
    
    const arreglo = [a,b, ...args]
    return arreglo
};

console.log(restParams(3, 4, 6,7,8,9,0,2,NaN,6,10))

//////////////////////////////////////////////////////////////////////////////
// Tarea 3

function transposeMatrix(matrix: number[][]): number[][] {
    // Verificamos que la matriz sea cuadrada
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) {
            throw new Error("La matriz no es cuadrada");
        }
    }

    // Creamos una nueva matriz para la transpuesta
    const transposed: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    // Rellenamos la matriz transpuesta
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}

// Ejemplo de uso:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);
