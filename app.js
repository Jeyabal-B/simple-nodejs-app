const http = require(`http`)
const hostname = 'localhost';
const port = `3000`

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader(`Content-Type`,`text/plain`)
    res.end(`This is a simple nodejs application running on the port:${port}`)
})

server.listen(port, hostname, () => {
    console.log(`Server is now running in the port:${port}`)
})