const index = require('./index.js');

function MdLinks(ruta, options) {
	const existPath = index.fileExist(ruta);//boolean
	const absolutePath = index.absolutePath(ruta);
	const fileMd = index.getMd(absolutePath); //boolean
	const readerFile = index.reader(absolutePath);

	return new Promise((resolve, reject) => {
		readerFile.then((file) => {
			const links = index.getLinks(file, absolutePath)
			if (options.validate == true) {
				resolve(index.statusLinks(links))
			} else {
				resolve(links)
			}
			reject(new Error("error")); //error personalizado
		})
			.catch((err) => console.error((err)))
	})
}

module.exports = {
	MdLinks
}