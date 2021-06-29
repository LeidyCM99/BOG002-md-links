// MODULOS DE NODE.JS
const fs = require("fs");
const path = require('path');
const fetch = require('node-fetch');
// LIBRERIAS DESCARGADAS
const marked = require('marked');
const chalk = require('chalk');

const options = {
	validate: true,
	stats: true
}
const PathMD = './markdown.md';
function MdLinks(ruta, options) {

	if (ruta === "") { // Comprobando que sea exista una ruta, que sea absoluta y/o convirtiendola en una
		console.log("No hay ruta")

	} else if (path.isAbsolute(ruta) === false) {
		const RutaAbsoluta = path.resolve(ruta);
		console.log("Ruta: ", RutaAbsoluta);
		ReadFile(ruta, options)
	}
	else {
		ReadFile(ruta, options)
	}
}
// Comprobando que sea un archivo markdown y leyenedolo
function ReadFile(ruta, options) {

	const extensionArchivo = /(.md)$/i;
	if (!extensionArchivo.exec(ruta)) {
		console.log('No es un archivo markdown');
	}
	else {
		console.log("Archivo markdown")
				
		fs.readFile(ruta, 'utf8', (err, data) => {// Leyendo el documento
			if (err) return console.error(err);
			if (data) return console.log(ShowLinks(data))
			}
		)
	}}

// Entrega de links con href, file y text
const ShowLinks = (parametro) => {
	const array = [];
	const renderer = {

		link(href, file, text) {
			const objetos = {
				href: href,
				file: PathMD, // retornar la path absolute
				text: text,
			};
			array.push(objetos);
			// return array
		}
	};
	marked.use({ renderer });
	marked(parametro);
	// console.log(array)
	return array
};


MdLinks(PathMD);
function validar(array) {
	return

}
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
