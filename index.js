// MODULOS DE NODE.JS
const fs = require("fs");
const path = require('path');
const fetch = require('node-fetch');
// LIBRERIAS DESCARGADAS
const marked = require('marked');
const chalk = require('chalk');
const options = {
	validate: true,
	stats: false
}
const PathMD = './markdown.md';
function MdLinks(ruta, options) {

	if (ruta === "") { // Comprobando que sea exista una ruta, que sea absoluta y/o convirtiendola en una
		console.log("No hay ruta")

	} else if (path.isAbsolute(ruta) === false) {
		const RutaAbsoluta = path.resolve(ruta);
		ruta = RutaAbsoluta;
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
		fs.readFile(ruta, 'utf8', (err, data) => {// Leyendo el documento
			if (err) return console.error(err);
			// if (data) return ShowLinks(data, ruta)
			const objetos = ShowLinks(data, ruta)
			if (options.validate === false) return console.log(ShowLinks(data, ruta))
			if (options.validate === true) return console.log(ShowLinks(data, ruta).push(Status(objetos)))
		}
		)
	}
}

// Entrega de links con href, file y text
const ShowLinks = (parametro, ruta) => {
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
	marked(parametro);
	return array
};


MdLinks(PathMD, options);



const Status = (objExample) => {
	return new Promise((resolve, reject) => {
		objExample.forEach(obj => {
			fetch(obj.href)
				.then((response) => {
					if (response.status == 200) {
						console.log({ ...obj, status: 'ok', code: `${response.status}` })
						return { ...obj, status: 'ok', code: `${response.status}` }
					} else {
						Object.assign(obj, { Status: response.status, status_text: response.statusText })
						console.log(obj)
					}
				})
				.catch((error) => {
					console.log(error)
				})
		})
	})
}



