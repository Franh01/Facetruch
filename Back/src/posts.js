const express = require('express');
const app = express.Router()

let prevId = 3;
let posts = [/* {
    name: 'Francisco',
    title: 'Hoy comi papas',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://www.ahumados.shop/wp-content/uploads/2021/06/GettyImages-1224918845-2000.jpg',
    id: 1
},
    {
        name: 'Dario',
        title: 'Me contrato MercadoLibre',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        url: 'https://statics.eleconomista.com.ar/2020/03/614e2f5f8c618.png',
        id: 2
    },
    {
        name: 'Santino',
        title: 'Aprobe el ingreso de Henry',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        url: 'https://www.algoritmomag.com/wp-content/uploads/2020/09/henry.jpeg',
        id: 3
} */];

app.get('/posts', (req, res) => {//por ejemplo aca borrar '/posts' y reemplazarlo por '/'
    if (req.query.name) {
        let foundPosts = posts.filter(post => post.name.toLowerCase().includes(req.query.name.toLocaleLowerCase()) || post.title.toLowerCase().includes(req.query.name.toLocaleLowerCase()));
        res.json(foundPosts);
    }

    if (req.query.name) {
        res.json(posts.filter(post => post.name.toLocaleLowerCase().includes(req.query.name.toLocaleLowerCase())));//filtra por el query name si coincide
    }
    if (req.query.title) {
        res.json(posts.filter(post => post.title.toLocaleLowerCase().includes(req.query.title.toLocaleLowerCase())));//filtra por el query name si coincide
    } else {                                                                                                          //devuelve los que coincidan en este caso
        res.json(posts);                                                                                             //(posts?name=lo que se busque)
    }
});

app.get('/posts/:id', (req, res) => {// aca seria '/:id'
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (!post) {
        // res.status(404) solo muestra 404 not found
        res.status(404).send(`No se encontro el post con el ID ${req.params.id}`)
    } else {
        res.json(post);
    }
});

app.post('/posts', (req, res) => {// aca '/'
    console.log(req.body);
    if (!req.body.name || !req.body.title || !req.body.content) {
        res.status(400)
    } else {
        const post = {         
            name: req.body.name,
            title: req.body.title,
            content: req.body.content,
            url: req.body.url,
            id: ++prevId
        };
        posts.push(post);
        res.json(post);
    };
});

app.put('/posts/:id', (req, res) => {// aca '/:id'
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    console.log(post)
    if (!post) {
        res.status(404).send(`No se encontro el post con el ID ${req.params.id}`)
    } else {
        post.name = req.body.name;
        post.title = req.body.title;
        post.content = req.body.content;
        post.url = req.body.url;
        return res.json(post);
    }
});

app.delete('/posts/:id', (req, res) => {// aca '/:id'
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (!post) {
        res.status(404).send(`No se encontro el post con el ID ${req.params.id}`)
    } else {
        posts = posts.filter(post => post.id !== parseInt(req.params.id));
        res.send(post);
    }
})

module.exports = app;
