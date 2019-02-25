const express = require('express');
const app = express();
const Joi = require('joi');
const path = require('path');

const schema = {
    nombre: Joi.string().required(),
    matricula: Joi.number().required(),
    correo: Joi.string().email().required()
};

const alumnos = [];

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, './public')});
});

app.post('/pasar_lista', (req, res) => {
    //Aquí va su código
    console.log(req.body);
    let nombre = req.body.alumno.nombre;
    let matricula = req.body.alumno.matricula;
    let correo = req.body.alumno.correo
    alumnos.push({"nombre":nombre,"matricula":matricula,"correo":correo});
    res.send({"status":true,"menssaje":"success","data":alumnos});

});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));