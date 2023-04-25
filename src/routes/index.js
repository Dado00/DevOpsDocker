const {Router} = require('express');
const router = Router();
const alumnos = [
        {"Matricula": 14003222, "Alumno": "David Avila"},
        {"Matricula": 18002333, "Alumno": "Pedro Perez"},
        {"Matricula": 17001234, "Alumno": "Eduardo Lopez"},
        {"Matricula": 15003456, "Alumno": "Vicente Rodriguez"}
];

  router.use('/alumnos', function(req, res){
    res.send(alumnos);
    
    });

console.log(alumnos)
module.exports = router;


