const express = require('express');

const app = express.Router()

let prevId = 1;
let amigos = [{ name: 'Fran', id: 1 }];

app.get('/amigos', (req, res) => {//por ejemplo aca borrar '/amigos' y reemplazarlo por '/'
    if (req.query.name) {
        res.json(amigos.filter(amigo => amigo.name.toLocaleLowerCase().includes(req.query.name.toLocaleLowerCase())));//filtra por el query name si coincide
    } else {                                                                                                          //devuelve los que coincidan en este caso
        res.json(amigos);                                                                                             //(amigos?name=lo que se busque)
    }
});

app.get('/amigos/:id', (req, res) => {// aca seria '/:id'
    const amigo = amigos.find((amigo) => amigo.id === parseInt(req.params.id));
    if (!amigo) {
        // res.status(404) solo muestra 404 not found
        res.status(404).send(`No se encontro al amigo con el ID ${req.params.id}`)
    } else {
        res.json(amigo);
    }
});

app.post('/amigos', (req, res) => {// aca '/'
    console.log(req.body);
    if (!req.body.name) {
        res.status(400)
    } else {
        const amigo = {
            id: ++prevId,
            name: req.body.name
        };
        amigos.push(amigo);
        res.json(amigo);
    };
});

app.put('/amigos/:id', (req, res) => {// aca '/:id'
    const amigo = amigos.find((amigo) => amigo.id === parseInt(req.params.id));
    if (!amigo) {
        res.status(404)
    } else if (!req.body.name) {
        res.status(400);
    } else {
        amigo.name = req.body.name;
        res.json(amigo);
    }
});

app.delete('/amigos/:id', (req, res) => {// aca '/:id'
    const amigo = amigos.find((amigo) => amigo.id === parseInt(req.params.id));
    if (!amigo) {
        res.status(404)
    } else {
        amigos = amigos.filter(amigo => amigo.id !== parseInt(req.params.id));
        res.send(amigo);
    }
})

module.exports = app;
