// const mdLinks = require("md-links");
const fs = require("fs"); 
const  jsdom  =  require ( "jsdom" ) ; 


// comprobando que sea md 
const path = './README.md';
const extensionArchivo = /(.md)$/i;

    if(!extensionArchivo.exec(path)){
        console.log('no es un archivo md');
        }
		else { console.log("si es un archivo md")
			// Leyendo el documento
			fs.readFile(path, 'utf8' , (err, data) => {
				if (err) {
				  console.error(err)
				  return
				}
				// imprimiendo docuemnto
				console.log(data)
			  })
			}

			 

// mdLinks(path, object) 
//   .then(links => {
// 	  console.log(links)
//     // => [{ href, text, file }]
//   })



// module.exports = () => {
//   // ...
// };
