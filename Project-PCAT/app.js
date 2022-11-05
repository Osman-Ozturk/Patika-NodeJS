import express from'express';
import path from'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app =express();
const port =3001;
const photo = {
        id:1,
        name:"Photo Name",
        description:"Photo description"
}


// MIDDLEWARE

app.use(express.static('public'))


app.get('/',(req,res)=>{
     res.sendFile(path.resolve(__dirname,'temp/index.html')) 
})

app.listen(port ,()=>{
        console.log(`Server wurde http://localhost:${port} aufgeführt `);
})
;