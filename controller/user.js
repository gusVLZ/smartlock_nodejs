const axios = require("axios")
const user = require("../model/user")

exports.login = async (req, res, next) => {
    var resp = false;
    user.findAll({
        where: {
            email: req.body.email,
            password: req.body.password,
            ativo: 1
        }
    }).then(u=>{
        resp = u.length > 0;
        if(resp){
            res.status(200).send("logado");
        }else{
            res.status(401).send("Credenciais inválidas")
        }
    }).catch(err=>{
        res.status(500).send("Erro no servidor")
    })
}

exports.cadastrar = async (req, res, next) => {
    const userCad = user.build(req.body)
    userCad.save(user).then(criado=>{
        res.status(200).send("Criado com sucesso")
    }).catch(err=>{
        res.status(500).send(err)
    })
}

exports.auth = async (email, password) => {
    await userCad.find(req.body).then(log=>{
        res.status(200).send("Ok")
    }).catch(err=>{
        res.status(500).send(err)
    })
}