const index  = require('./index.js');
const PathMD = './markdown.md';


const options = {
	validate: true,
	stats: true
}

function MdLinks(ruta) {
	const existPath   = index.fileExist(ruta)//boolean
	const absolutePath= index.absolutePath(ruta)
	const fileMd      = index.getMd(absolutePath) //boolean
	const readerFile  = index.reader(absolutePath)

	readerFile.then((file)=>{
		const objLinks=index.getLinks(file,  absolutePath)
	})
	
	// return index.absolutePath(ruta, options)
}

MdLinks(PathMD, options) 

	const validate = () => {
		const objetos = getLinks(file, ruta)
		if (options.validate === false) resolve(objetos);
		if (options.validate === true) {
			statusLinks(objetos)
				.then((result) => {
					console.log(result)
				})
		}
	}

		// .then((result) => {
	// 	userOptions(PathMD, options, result)	
	// })
	
	// node mdlinks.js

	// function userOptions(ruta, options, result) {
	// 	options.stats ==true? console.log(result, index.stats(result)): console.log(result)}