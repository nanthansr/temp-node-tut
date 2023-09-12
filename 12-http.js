const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to main")
    }
    if (req.url=== '/about'){
        res.end('about page : Nothign to say jjust leaning new lanaguages . Love it')
    }
    
    res.end(`<h1>Problem</h1>
    <p>Cant find what you are looking for</p>
    <a href="about/">go back to home </a>`)
})

server.listen(500)