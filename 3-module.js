//Everu file is a module

const names = require('./4-names');
console.log(names)
const sayHi =require('./5-util')
const data = require('./6-alt-flavor')
require('./7-mindgrenade')
console.log(data)
sayHi('susan')
sayHi(names.john)