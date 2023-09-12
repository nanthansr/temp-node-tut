const os = require('os')
const user=os.userInfo()
console.log(user)

console.log(`The systems uptime is ${os.uptime()} seconds`)

const currentO = {
    name:os.type(),
    release:os.release()
}

console.log(currentO)