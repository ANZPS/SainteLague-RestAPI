const fastify = require('fastify');
const lague = require('saintelague'),
  parties,
  results;

const app = fastify();

app.get('/', function (req, res) {
    req.send("Our first route");
});

app.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        return;
    };
    console.log(`Server listening on ${address}`)
});