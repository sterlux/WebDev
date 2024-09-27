// Ejercicio 1: File System Directory Size
// Calcula el tamaño total de un directorio, incluyendo todos los subdirectorios

function calculateDirectorySize(directory) {
  // tu código aquí
}

// Ejemplo de entrada:
const fileSystem = {
  name: "root",
  children: [
    { name: "file1.txt", size: 100 },
    { name: "file2.txt", size: 200 },
    {
      name: "folder1",
      children: [
        { name: "file3.txt", size: 300 },
        { name: "file4.txt", size: 400 },
      ],
    },
  ],
};

console.log("Total size:", calculateDirectorySize(fileSystem)); // 1000

/* ================================================================================= */

// Ejercicio 2: Fibonacci Sequence
// Calcula el enésimo número de la secuencia de Fibonacci

function fibonacci(n) {
  // tu código aquí
}

console.log("10th Fibonacci number:", fibonacci(10)); // 55

/* ================================================================================= */

// Ejercicio 3: Sum of Natural Numbers
// Calcula la suma de los primeros n números naturales

function sumOfNaturalNumbers(n) {
  // tu código aquí
}

console.log("Sum of natural numbers from 1 to 5:", sumOfNaturalNumbers(5)); // 15
console.log("Sum of natural numbers from 1 to 10:", sumOfNaturalNumbers(10)); // 55
