const express = require('express');
const app = express();
const fs = require('fs');
const login = fs.readFileSync('login.html');
const cardapio = fs.readFileSync('cafemenu.html');
const home = fs.readFileSync('home.html');


//const getip = require('./getIP');


app.listen(8888, function(erro) {
    if (erro) {
        console.log('Erro ao iniciar o servidor')
    } else {
        console.log('Servidor online.')
    }
})

app.get("/login", function(request, response) {
     response.end(login);

    let email = request.query.email;
    let senha = request.query.senha;

    if (email == undefined && senha == undefined) {
        return response.send('Insira seu email e senha');
    } else if (email == undefined && senha != undefined) {
        return response.send('Informe seu email');
    } else if (email != undefined && senha == undefined) {
        return response.send('Insira sua senha');
    }  else if (email != undefined && senha != undefined) {
        return response.send('Seja bem vindo!');
        //redireciona para o /home
    }
})


app.get("/", function(request, response){
    response.end(home);
    //Imagem simbólica do restaurante. Não sai junto do arquivo html
    
})


app.get("/cardapio", function(request, response){
    const itens = ["French Vanilla", "Caramel Macchiato", "Pumpkin Spice ", "Hazelnut", "Mocha"];
    //console.log(itens);
    response.end(cardapio);


})

app.get("/cardapio/pedido/:index", function(request, response){
    const itens = [" French Vanilla", " Caramel Macchiato", " Pumpkin Spice ", " Hazelnut", " Mocha"];
    
    const {index} = request.params; //Passar um item na url e n da certo

    response.send("Escolha o seu café:" + itens) //concatenar. nao envia 2 sends

    console.log(itens[index]); //Linha p retornar o item escolhido q

})



