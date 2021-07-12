// const path = require('path');
// // crear y leer archivos 
// const fs = require('fs');
// //  rutas y metodos para la extraccion de la informacion
// const notes = '/users/joe/notes.txt'

// path.extname(notes) // .txt

// stats.isFile() //true
// stats.isDirectory() //false

// const http = require('http') // metodos y status code 
// const mdLinks = require("md-links");




//crear funcion con opciones --stats y --validate
// const options = ()=>{
// 	if (options.stats==true) {
// 		stats(result)
// 	} else {
		
// 	}
// }

//reader
			// const objetos = getLinks(file, ruta)
			// if (options.validate === false) resolve(objetos);
			// if (options.validate === true) {
			// 	statusLinks(objetos)
			// 		.then((result) => {
			// 			resolve(result)
			// 		})
			// }
			// if (err) reject(new Error(err))



			
// function userOptions(ruta, options, result) {
// 	const objetos= getLinks(file, ruta);
//    if (options.stats ==true && options.validate ==false) {
// 	   stats(result)
//    } 
//    if (options.stats== false && options.validate== true){
// 	   statusLinks(objetos)
// 	   .then((result) => {
// 		   console.log( result)
// 	   })
//    }
//    if (options.validate==true && options.stats == true){
// 	   console.log(statusLinks(objetos), stats(result))
//    }
//    if (options.validate==false && options.stats == false){
// 	   reader(ruta, options).then((result)=>{console.log(result)}
// 	   )}
// }