const index  = require('./index.js');
const PathMD = './markdown.md';
const options = {
	validate: true,
	stats: false
}

function MdLinks(ruta, options) {
	return index.absolutePath(ruta, options)
}

MdLinks(PathMD, options) 
	.then((result) => {
		console.log(result,index.stats(result))
	})
	

	// node mdlinks.js