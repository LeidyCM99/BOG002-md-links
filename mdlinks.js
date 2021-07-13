const index = require('./index.js');

function MdLinks(ruta, options) {
<<<<<<< HEAD
	const existPath = index.fileExist(ruta);//boolean
	const absolutePath = index.absolutePath(ruta);
	const fileMd = index.getMd(absolutePath); //boolean
	const readerFile = index.reader(absolutePath);
=======
	const existPath    = index.fileExist(ruta);//boolean
	const absolutePath = index.absolutePath(ruta);
	const fileMd       = index.getMd(absolutePath); //boolean
	const readerFile   = index.reader(absolutePath);
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b

	return new Promise((resolve, reject) => {
		readerFile.then((file) => {
			const links = index.getLinks(file, absolutePath)
<<<<<<< HEAD
			if (options.validate == true) {
				resolve(index.statusLinks(links))
=======
			if (options.validate== true) {
				resolve (index.statusLinks(links) )
>>>>>>> c874502b27f66e239eb3995a529549c9f07bd85b
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