/**
 * 
 *          TIPO DE DATOS NUMBER number
 * 
 */

//1. Entero
const enter = 33
const decimal = 3.34
//2. notacion Cientifica
const cientifica =5e4
//3. Infinito y NaN (no es un numero)
const infiniro = Infinity
const noEsNumero = NaN

// OPERACIONES ARITMETICAS
//1. suma, resta, multiplicacion, division
const suma = 5+6
const resta = 10-10
const multiplicacion = 3*4
const division = 16/4

//2. modulo y exponenciacion
const modulo = 16 % 8 //0
const exponenciacion = 2^4
 // LA PRESICION EN JAVASCRIPT
const resultado = 0.1 +0.2 //0.3
//console.log(resultado.toFixed(1))
//console.log(resultado.toFixed(1) == 0.3) //true

//OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.trunc(Math.random()*20 -5)
//console.log(raizCuadrada)
//console.log(valorAbsoluto)
console.log(aleatorio)

//Lenguajes de programacion:
                                //Runtime Exception
//COMPILADOS: java (JVM -> .java _-_> .class)
//INTERPRETADOS: javascript -->  lee -> ejecuta 

const numero = 2
const boolean = true
//conversion implicita
console.log(numero+boolean)
