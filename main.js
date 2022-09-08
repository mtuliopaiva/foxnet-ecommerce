var internet = document.querySelectorAll('.btn__adicionar');
const detalhes = document.querySelectorAll('.plano__detalhes');
var fixo = document.querySelectorAll('.plano__fixo');
var tv = document.querySelectorAll('.plano__tv');
var carrinho = document.querySelector('.carrinho');


const lista = document.getElementById('carrinho__planos');
var cart = 0;




detalhes.forEach(detalhes => {
    detalhes.addEventListener('click', evento =>{
        console.log(evento.target);

    })
})
/*Evento de clique para selecionar os inputs dos planos*/
internet.forEach(plano => {
    plano.addEventListener('click', evento => {
        
        
        console.log(evento.target);
        if(evento.target){
            console.log("Entrou na condiCAO");
            var telefoneFixo = document.querySelector('.fixo');
            var tv = document.querySelector('.tv');
            
            telefoneFixo.style.cssText = 'opacity: 1;';
            tv.style.cssText = 'opacity: 1;';
            carrinho.style.cssText = 'opacity: 1;';


            
            const selecionadoValor = evento.target.dataset.valor;
            const selecionadoNome = evento.target.dataset.nome;
            var li = document.createElement("li");


            console.log(selecionadoValor);
            console.log(selecionadoNome);

            lista.appendChild(li);
            li.appendChild(document.createTextNode(selecionadoNome));
        }
        else{

        }

    }
    )
})