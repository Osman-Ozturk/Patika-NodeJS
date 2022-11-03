import  http  from 'http'
const port =3001
const server = http.createServer((request,response)=>{
        const url = request.url
        response.writeHead(200,{'Content-Type':'text/html'})
        if(url === '/'){
                response.write('<h1>index Seite</h1>')

        }else if(url === '/about'){
                response.write('<h1>About Seite</h1>')
        }else if(url === '/contact'){
                response.write('<h1>Contact Seite</h1>')
        }else {
                response.writeHead(404,{'Content-Type':'text/html'})
                response.write('<h1>Die Seite wurde nicht gefunden</h1>')
        }
        response.end()
})
server.listen(port,()=>{
        console.log(`der Server wurde http://localhost:${port} ausgeführt`);
})