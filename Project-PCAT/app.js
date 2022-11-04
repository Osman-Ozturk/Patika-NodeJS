import express from'express';

const app =express();
const photo = {
        id:1,
        name:"Photo Name",
        description:"Photo description"
}


const port =3001;
app.get('/',(req,res)=>{
     res.send(photo)  
})

app.listen(port ,()=>{
        console.log(`Server wurde http://localhost:${port}`);
})
