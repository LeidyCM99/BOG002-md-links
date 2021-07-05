// MODULOS DE NODE.JS
const fs = require("fs");
const path = require('path');
const fetch = require('node-fetch');
// LIBRERIAS DESCARGADAS
const marked = require('marked');
const options = {
	validate: true,
	stats: false
}
const PathMD = './markdown.md';
function MdLinks(ruta, options) {

	if (ruta == "") { // Comprobando que sea exista una ruta, que sea absoluta y/o convirtiendola en una
		console.log("No hay ruta")

	} else if (path.isAbsolute(ruta) === false) {
		const RutaAbsoluta = path.resolve(ruta);
		ruta = RutaAbsoluta;
		return getMd(ruta, options)
	}
	else {
		return getMd(ruta, options)
	}
}
const getMd = (ruta, options) => {
	const extensionArchivo = /(.md)$/i;
	if (!extensionArchivo.exec(ruta)) {
		new Error("Error: File is not .md File");
	}
	else {return reader(ruta, options)}
}

// Comprobando que sea un archivo markdown y leyendolo
function reader(ruta, options) { //mas pura
	 return new Promise((resolve, reject) => {
		fs.readFile(ruta, 'utf8', (err, file) => {// Leyendo el documento
			const objetos = getLinks(file, ruta)
			if (options.validate === false) resolve(objetos);
			if (options.validate === true) {
				statusLinks(objetos)
					.then((result) => {
						resolve(result)
					})
			}
			if (err) reject(new Error(err))
		}
		)
	})
}

// Entrega de links con href, file y text
const getLinks = (html, ruta) => {
	const array = [];
	const renderer = {

		link(href, file, text) {
			const objetos = {
				href: href,
				file: ruta,
				text: text,
			};
			array.push(objetos);
		}
	};
	marked.use({ renderer });
	marked(html);
	return array
};

MdLinks(PathMD, options) //buscar error en reader
	.then((result) => {
		stats(result)
	})
	


const statusLinks = (objValid) => {
	const arrayStatus = objValid.map(obj => {
		return fetch(obj.href)
			.then((response) => {
				if (response.status === 200) {
					return { ...obj, status: 'OK', code: response.status }
				} else {
					return { ...obj, status: 'FAIL', code: response.status }
				}
			})
			.catch((error) => {
				return { ...obj, status: error, code: error } //error con un objeto
			})
	})
	return (Promise.all(arrayStatus))
}

//crear funcion con opciones --stats y --validate

function stats(result) {
	const broken = result.filter(item => item.status === "FAIL");
	const unique = [...new Set(result.map((item) => item.href))];
	const items = {
		Total: result.length,
		Unique: unique.length,
		Broken: broken.length
	}

	console.log(items)
	return items
}

