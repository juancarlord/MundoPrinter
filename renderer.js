const { print } = require('pdf-to-printer')
function arroz() {
  
  print('resultados.pdf').then(console.log).catch(console.error);
  
}