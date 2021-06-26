// MODULOS DE NODE.JS

const fs = require("fs");
const path = require('path');
const fetch = require('node-fetch');

// LIBRERIAS DESCARGADAS

const marked = require('marked');


const options ={
	validate:true
}

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
			ShowLinks(data)
		})
	}
}


// Entrega de links con href, file y text
function ShowLinks(data) {
	const array = [];
	const renderer = {

		link(href, file, text) {
			const objetos = {
				href: href,
				file: PathMD,
				text: text,
			};
			array.push(objetos);
			return array
		}
	};

	marked.use({ renderer });
	const html = marked(data)
	
	const NewArray = renderer.link()
	NewArray.forEach(obj => {
		fetch(obj.href)
			.then((response) => {
				console.log( "status:  ", response.status, obj)
				
			})
			.catch((error) => {
				console.log(error)
			})
	})
};


// Status 




