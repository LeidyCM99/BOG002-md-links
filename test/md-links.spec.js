const md = require('../mdlinks.js');

describe('function mdLinks', () => {
  it('should a function',() => {
	expect(typeof md.MdLinks).toBe('function');
  });

  test('resolve of mdlinks', () => {
	return md.MdLinks("markdown.md", {validate:true}).then(data => {
		console.log(data)
	//   expect(typeof data).toBe('array');
	});
  });
});


// describe('mdLinks', () => {

// 	it('should', () => {
// 	  console.log('FIX ME!');
// 	});
  
//   });

  
// test('the data is peanut butter', () => {
// 	return fetchData().then(data => {
// 	  expect(data).toBe('peanut butter');
// 	});
//   });
//asincronicos
// test('the data is peanut butter', () => {
// 	return expect(fetchData()).resolves.toBe('peanut butter');
//   });