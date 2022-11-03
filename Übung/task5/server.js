import http from 'http';


const host = '127.0.0.1'
const port = 5000

const server  = http.createServer((request,response)=>{
        const url =request.url
        response.writeHead(200,{'Content-Type':'text/html'})
        if(url === '/'){
                response.write('<h1>index Seite</h1>')

        }else if(url === '/contact'){
                response.write('<ul><li>Tel : ....</li><li>Email : ....</li><li>Adresse : ....</li></ul>')
        }else if(url === '/about'){
                response.write('<h1>uber uns</h1>')
        }else {
                response.writeHead(404,{'Content-Type':'text/html'})
                response.write('<h1>Die Seite wurde nicht gefunden</h1>')
        }
        response.end()
})

server.listen(port,host,()=>{
        console.log(`der Server wurde http://${host}:${port} ausgeführt`);
})