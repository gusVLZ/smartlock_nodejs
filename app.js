const express = require('express')
const http = require("http")
const route = require('./routes/routes')
//const sequelize = require("./database/database")



const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.redirect('/view/index.html')
})

app.get('/hell', (req, res)=>{

    const parser = port.pipe(new Readline({ delimiter: '\n' }));
    // Read the port data
    port.on("open", () => {
    console.log('serial port open');
    });
    parser.on('data', data =>{
    console.log('got word from arduino:', data);
    });
    port.write('LED', (err) => {
        if (err) {
            res.send("err")
        return console.log('Error on write: ', err.message);
        }
        console.log('message written');

        res.send("Porta Aberta")
    });

})

app.use('/view', express.static(__dirname+'\\view'));

app.use('/api', route)

app.use((request, response, next) => {
    response.status(404).send()
})

app.use((error, request, response, next) => {
    response.status(500).json({
        error
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})