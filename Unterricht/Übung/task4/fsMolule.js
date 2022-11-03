const fs = require("fs");

// write

fs.writeFile(
  "employees.json",
  '{"name":"Employee 1 Name","salary": 2000}',
  "utf8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Die File wurde erfolgreich erstellt");
    }
  }
);

// read

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// append

fs.appendFile(
  "employees.json",
  '\n{"name": "Employee 2 Name", "salary": 4000}',
  "utf8",
  (err) => {
    if (err) console.error(err);
    console.log("die daten in json wurden aktualisiert");
    
  }
);

// delete 

fs.unlink('employees.json',(err)=>{
        if (err) {
            console.log(err);    
        }
        console.log('Die Ordner wurde gelöscht');
})