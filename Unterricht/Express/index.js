import express  from "express";
const host = '127.0.0.1'
const port =3001
const app =express();

app.get('/',(req,res)=>{
        res.status(200).send('Hello Word')
})
app.get('/about',(req,res)=>{
        res.status(200).send('ich bin jetzt in About')
})
app.get('/contact',(req,res)=>{
        res.status(200).send('ich bin jetzt in Contact')
})
app.get('*',(req,res)=>{
        res.status(404).send('Die SEite wurde nicht gefunden')
})

app.listen(port,host, ()=>{
        console.log(`http://${host}:${port}`);
})