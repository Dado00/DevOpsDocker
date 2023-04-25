const express = require ('express');
const app = express();
const puerto=3000;
const alumnos = [
    {"Matricula": 14003222, "Alumno": "David Avila"},
    {"Matricula": 18002333, "Alumno": "Pedro Perez"},
    {"Matricula": 17001234, "Alumno": "Eduardo Lopez"},
    {"Matricula": 15003456, "Alumno": "Vicente Rodriguez"}
];

app.get('/alumnos', function(req, res){
res.json(alumnos);

});

app.listen(puerto, () => console.log(`app listening on http://localhost:${puerto}`) );
