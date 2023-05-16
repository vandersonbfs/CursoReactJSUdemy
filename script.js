// Aula 05
var nome = "Vanderson";
// Aula 06
// var idade = prompt("Digite a sua idade:");
// Escrever no html atraves do js
// document.write("Aprendendo JavaScript");
// Aula 07
// Funcao entrar
function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');
    if(texto == '' || texto == null){
        alert('Digite um nome!');
        area.innerHTML = 'Bem vindo ...';
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
   

}
