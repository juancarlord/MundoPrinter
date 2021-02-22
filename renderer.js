const { print } = require('pdf-to-printer')

const options = {
  win32:['-print-settings "fit"']
}
function arroz() {
  
  print('resultados.pdf', options).then(console.log).catch(console.error);
  
}