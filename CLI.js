#!/usr/bin/env node
const chalk = require('chalk');
const process = require('process')
const yargs = require('yargs')
const md = require('./mdlinks');
const index = require('./index.js');
const myArgs = process.argv.slice(2);
const PathMD = myArgs[0]
console.log(PathMD)


const argv = yargs
	.option('validate', {
		alias: 'v',
		description: 'Validate the links',
		type: 'boolean'
	})
	.option('stats', {
		alias: 's',
		description: 'Shows the statistics',
		type: 'boolean'
	})

	.help()
	.alias('help', 'h')
	.argv

if (!PathMD) {
	console.log(chalk.bold.bgRed("Enter the path of your file"));
}
//validar links
if (argv.validate && !argv.stats) {
	md.MdLinks(PathMD, { validate: true })
		.then((obj) => {
			index.statusLinks(obj)
				.then((result) => {
					console.log(chalk.bold.yellowBright("************************ Validate the links ***************************"));
					console.log(result)
				})
		})
}
//Estadisticas de los links
if (argv.stats && !argv.validate) {
	md.MdLinks(PathMD, { validate: true })
		.then((obj) => {
			console.log(chalk.bold.yellowBright("****** Stats the links *******"));
			console.table(index.stats(obj))
		})
}
//Validar y estadistica
if (argv.stats && argv.validate) {
	md.MdLinks(PathMD, { validate: true })
		.then((obj) => {
			console.log(chalk.bold.yellowBright("******* Stats and validate *******"))
			console.table(index.stats(obj))
			console.table(index.broken(obj))
		})
}

if (!argv.stats && !argv.validate) {
	md.MdLinks(PathMD, { validate: false })
		.then((obj) => {
			console.log(chalk.bold.yellowBright("************************ Links ***************************"))
			console.log(obj)
		})
}
