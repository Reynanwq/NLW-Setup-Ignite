//API RESTfull
//FASTIFY será usado no lugar do express

import Fastify from 'fastify'
const app = Fastify();

app.get('/', (req, res) => {
    return console.log('Hello Lavinia');
});

const port = 3333;
app.listen({port}). then(() => console.log('Server is running'));