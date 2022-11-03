const fs = require('fs')
/*
// FILE READING

fs.readFile("password.txt",'utf8',(err,data)=>{
        if (err) {
               console.log(err); 
        }else{
                console.log(data);
        }
})

// FILE WRITING

fs.writeFile('example.json','{"name":"Osman","age": 36}','utf8',(err ,data)=>{
        if (err) {
               console.log(err); 
        }else{
                console.log("Die File wurde erfolgreich erstellt");
        }
})

// append data -- daten hinzufügen
fs.appendFile('example.txt','\n Kodluyoruz 222','utf8',(err ,data)=>{
        if (err) {
               console.log(err); 
        }else{
                console.log("Die File wurde erfolgreich erstellt");
        }
})

// remove daten

fs.unlink('example.json',(err)=>{
        if (err) {
                console.log('Die Daten wurde gelöscht'); 
         } 
})

*/


// ---- ordner anlegen 

/*fs.mkdir('uploads/img',{recursive:true},(err)=>{
        if(err)console.log(err);
        console.log('Die Ordner wurden angelegt');
})*/

// ---- ordner remove
fs.rmdir('uploads',{recursive:true},(err)=>{
        if(err)console.log(err);
        console.log('Die Ordner wurden gelöscht');
})