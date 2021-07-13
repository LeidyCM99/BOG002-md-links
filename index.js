const fs = require("fs");
const path = require('path');
const fetch = require('node-fetch');
const marked = require('marked');
const chalk = require('chalk');
// Comprobando existencia de la ruta, que sea absoluta y/o convirtiendola en una

const fileExist = (ruta) => (fs.existsSync(ruta));
const getMd = (ruta) => (path.extname(ruta) === '.md');

const absolutePath = (ruta) => {
	if (path.isAbsolute(ruta) == false) {
		return ruta = path.resolve(ruta);
<<<<<<< HEAD
	}
	else{
		return ruta
	}
}

=======
	}
}
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
// Comprobando que sea un archivo markdown y leyendolo
const reader = (ruta) => {
	return new Promise((resolve, reject) => {
		if (fileExist(ruta) && getMd(ruta) == true) {
			fs.readFile(ruta, 'utf8', (err, file) => {// Leyendo el documento
				resolve(file);
				reject(new Error(chalk.white.bgRed(err)))
			})
		} else {
			reject(
				new Error(chalk.white.bgRed("The file does not exist or is not an md file "))
			)
		}
	})
}

// Entrega de links con href, file y text
const getLinks = (html, ruta) => {

	const array = [];
	const renderer = {
		link(href, file, text) {
			const objetos = {
				text: text,
				href: href,
				file: ruta
			};
			array.push(objetos);
		}
	};
	marked.use({ renderer });
	marked(html);
	return array
};

const statusLinks = (objetos) => {
	const arrayStatus = objetos.map(obj => {
		return fetch(obj.href)
			.then((response) => {
				if (response.status >= 400) {
<<<<<<< HEAD
					return { ...obj, status: 'FAIL', code: response.status }
				} else {
					return { ...obj, status: 'OK', code: response.status }
=======
					return { ...obj, status:'FAIL', code: response.status }
				} else {
					return { ...obj, status: 'OK', code: response.status}
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
				}
			})
			.catch((error) => {
				return { ...obj, status: error, code: response.status }
			})
	})
	return (Promise.all(arrayStatus))
}

function stats(result) {
	const unique = [...new Set(result.map((item) => item.href))];
	const items = {
		Total: result.length,
		Unique: unique.length
	}
	return items
}

<<<<<<< HEAD
function broken(result) {
	const broken = result.filter(item => item.status == 'FAIL');
	const bronkenLink = {
		Broken: broken.length
	}
	return bronkenLink
=======
function broken(result){
	const broken = result.filter(item => item.status == 'FAIL');
	const bronkenLink={
		Broken: broken.length
	}
	return bronkenLink
}


module.exports = {
	fileExist,stats,absolutePath,reader,
	getMd,getLinks,statusLinks, broken
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
}


module.exports = {
	fileExist, stats, absolutePath, reader,
	getMd, getLinks, statusLinks, broken
}
