const chalk = require('chalk');

console.log(chalk.bold.magenta('Hello world!'));
console.log (process.argv)
const myArgs =process.argv.slice(2);
console.log('myArgs: ', myArgs);

























// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// const arr= [-9,-9,-9 , 1, 1, 1 ,
// 			 0, -9,  0,  4, 3, 2,
// 			-9, -9 ,-9,  1, 2, 3,
// 			 0 , 0,  8 , 6, 6, 0,
// 			0 , 0 , 0 ,-2, 0, 0]
// /*
//  * Complete the 'hourglassSum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts 2D_INTEGER_ARRAY arr as parameter.
//  */

// function hourglassSum(arr) {
//     // Write your code here
// 	console.log("prueba")
// 	for (let i of arr.keys()){
	  
// 	const numero = arr[i]

// 	console.log(numero);
// } 
	 

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     let arr = Array(6);

//     for (let i = 0; i < 6; i++) {
//         arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     }

//     const result = hourglassSum(arr);

//     ws.write(result + '\n');

//     ws.end();
// }}


// hourglassSum(arr) 







































