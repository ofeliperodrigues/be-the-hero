const Express = require('express');
const cors = require('cors');
const app = Express();

const routes = require('./routes');

app.use(cors());
app.use(Express.json());
app.use(routes);
/**
 * Query Params = ?name=Felipe&age27
 * Route Params = /users/:id
 * Request Body = used with POST
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.get('/', (req, res) => {
  return res.send("Hello");
});

app.listen(3333);
