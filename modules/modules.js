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





// mdLinks(path, object) 
//   .then(links => {
// 	  console.log(links)
//     // => [{ href, text, file }]
//   })



// module.exports = () => {
//   // ...
// };
// validate, status htpp

// let promise = new Promise(function(resolve, reject) {
// 	// executor (the producing code, "singer")
//   });


// const objLinkPromise = new Promise((resolve) => {
// 	resolve(objectos)
	
// })

// Object.entries(obj).forEach(([key, value]) => {
// 	console.log( value  );
// });



// Status links
// const NewArray = renderer.link()
//       NewArray.forEach(obj => {
// 	fetch(obj.href)

// 		.then((response) => {
// 			// console.log(response)
// 			if (response.status == 200) {

// 				Object.assign(obj, { Status: response.status, status_text: "OK" })
// 				console.log(obj)
// 			} else {
// 				Object.assign(obj,{ Status: response.status, status_text: response.statusText })
// 				console.log(obj)
// 			}
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// })
//OPCION  CON PROMESAS

// const validate = true;

// function validation() {
//    return new Promise((resolve, reject){
//       if (validate) {
//          resolve();     
//       } else {
//          reject()
//       }
//    });
// }

// validation.then((parametro)=> console.log("objeto con el status de cada link"))
// validation.catch((parametro)=> console.log("objeto unicamente"));


// OPCION 2 SIN PROMESA
	//  if (validate == true) {
	// 	  console.log("objeto con los links")
	//  } else {
	// 	 console.log("objeto unicamente")
	//  }