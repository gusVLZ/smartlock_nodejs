const axios = require("axios");
const logTable = require("../model/logTable");

exports.openDoor = async (req, res, next) => {
    var resp = "";
    if(req.hostname != "25.15.58.24" && req.hostname != "localhost" ){
        logTable.create({
            "ds_objeto": "connection",
            "ds_descricao": req.hostname+" Usuario não está autorizado"
        });
        res.status(401).send("não autorizado")
        return;
    }
    logTable.create({
        "ds_objeto": "connection",
        "ds_descricao": req.hostname+" Usuario está conectando ao IOT"
    });

    await axios.get("http://25.15.20.71:3000/api/opendoor").then(res =>{
        
        logTable.create({
            "ds_objeto": "connection",
            "ds_descricao": req.hostname+" Usuario ligou o LED"
        });
        resp="A porta foi aberta com sucesso";

    }).catch(error =>{
        
        logTable.create({
            "ds_objeto": "connection",
            "ds_descricao": req.hostname+" Usuário não conseguiu ligar o LED"
        });
        res.status(500).send("Erro: "+error.message);

    })
    res.send(resp);
}

exports.closeDoor = async (req, res, next) => {
    var resp = "";
    if(req.hostname != "25.15.58.24" && req.hostname != "localhost" ){
        logTable.create({
            "ds_objeto": "connection",
            "ds_descricao": req.hostname+" Usuario não está autorizado"
        });
        res.status(401).send("não autorizado")
        return;
    }
    logTable.create({
        "ds_objeto": "connection",
        "ds_descricao": req.hostname+" Usuario está conectando ao IOT"
    });
    
    await axios.get("http://25.15.20.71:3000/api/closedoor").then(res =>{
        
        logTable.create({
            "ds_objeto": "connection",
            "ds_descricao": req.hostname+" Usuario desligou o LED"
        });
        
        resp="A porta foi fechada com sucesso";

    }).catch(error =>{
        
        logTable.create({
            "ds_objeto": "connection",
            "ds_descricao": req.hostname+" Usuário não conseguiu desligar o LED"
        });
        res.status(500).send(error.message);

    })
    res.send(resp);
}

exports.logging = async (req, res, next) => {
    await logTable.create(req.body).then(log=>{
        res.status(200).send("Ok")
    }).catch(err=>{
        res.status(500).send(err);
    })
}