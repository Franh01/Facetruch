const express = require('express');
const amigos = require('./src/amigos');
const posts = require('./src/posts');
const app = express();


app.use(express.json());//?intermediario para parsear la info del body a json y que express pueda entenderlo

app.use((req, res, next) => {
    console.log(req.path);
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.send('<p>/amigos api amigos, /posts api post</p>');
});//cuando se use para otra cosa que no sea json se utiliza 'res.send'

app.use(amigos);
//tambien podria usarse app.use('/amigos', amigos), pero para eso tambien deberia de borar el amigos de cada metodo en el otro archivo, de hecho se deberia hacer asi
app.use(posts);

app.listen(1337, () => {
    console.log('Nuestro servidor escucha en el puerto 1337')
})