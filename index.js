// MODULOS DE NODE.JS

const fs = require("fs");
const path = require('path');

// LIBRERIAS DESCARGADAS
const marked = require('marked');
const jsdom = require("jsdom");


// Comprobando que sea exista una ruta, que sea absoluta y/o convirtiendola en una.
const PathMD = './markdown.md';

if (PathMD === "") {
	console.log("No hay ruta")

} else if (path.isAbsolute(PathMD) === false) { //la ruta es relativa
	const RutaAbsoluta = path.resolve(PathMD);// Se convierte en absoluta
	console.log("Ruta: ", RutaAbsoluta);
	ReadFile()
}
else {
	ReadFile()
}

// Comprobando que sea un archivo markdown y leyenedolo
function ReadFile() {

	const extensionArchivo = /(.md)$/i;
	if (!extensionArchivo.exec(PathMD)) {
		console.log('No es un archivo markdown');
	}
	else {
		console.log("Archivo markdown")
		fs.readFile(PathMD, 'utf8', (err, data) => {// Leyendo el documento
			if (err) {
				console.error(err)
			}
			mostrar(data)
		})
	}
}


// Entrega de links con href, file y text
const mostrar = (data) => {
	const array = [];
	const renderer = {
		link(href, file,  text) {
			
			const objetos = {
				href,  file: PathMD, text
			};
			 array.push(objetos);
			return array
		}
	};
	
	marked.use({renderer});	
	const html = marked(data)
	console.log(renderer.link())
}



// mdLinks(path, object) 
//   .then(links => {
// 	  console.log(links)
//     // => [{ href, text, file }]
//   })



// module.exports = () => {
//   // ...
// };
// validate, status htpp

// function promise (){
// 	return new promise( function (reject, resolve)
// 	{
// 		fs.readFile(PathMD, 'utf8')// Leyendo el documento
		
// 	})
// }