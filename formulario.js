/*
Lembretes:
- Ao usuário digitar produto e clicar em cadastrar o produto é inserido em uma lista dinamicamente, porém ação só pode ser realizada uma vez. Descobrir como resolver problema.
(Repetição com o for talvez seja uma solução!!!)
*/
function cadastrarProduto(){

    var input = document.querySelector('#prod'); //produto digitado pelo usuário
    var produto = input.value; //transforma a string em utilizavel para o código
    var prod1 = document.querySelectorAll('#prod1')[0]; //seleciona lista
    var prod2 = document.querySelector('#prod2');
    var prod3 = document.querySelector('#prod3')
        if(produto == ""){ //verificação do input
            alert("Ops!Acho que você esqueceu de digitar um produto!"); 
        }else{
            prod1.innerHTML = produto; //armazena produto digitado na lista
            var seletor1 = document.getElementById('produto1'); //seleciona option
            seletor1.innerHTML = produto; //armazena produto digitado na option
        }
    
    }
    
    