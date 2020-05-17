const express = require('express')
const http = require("http");
const route = require('./routes/routes');
//const sequelize = require("./database/database");

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Parabens atrasado Gui!")
})

app.use('/api', route);

app.use((request, response, next)=>{
    response.status(404).send();
});

app.use((error, request, response, next) => {
    response.status(500).json({error});
})

/*sequelize.sync({force:false}).then(() => {
    const port = process.env.PORT || 3000;

    app.set("port", port);

    const server = http.createServer(app);

    console.log(`Servidor rodando na porta ${port}`);

    server.listen(port);
});*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });