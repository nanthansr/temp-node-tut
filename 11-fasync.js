const { readFileSync,writeFileSync } = require("fs")
const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')
console.log(first,second)
