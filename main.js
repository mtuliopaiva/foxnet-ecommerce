const internet = document.querySelectorAll('.internet__adicionar');
const fixo = document.querySelectorAll('.fixo__adicionar');
const tv = document.querySelectorAll('.tv__adicionar');
const lista = document.querySelector('#carrinho__planos');



var carrinhoValor = document.querySelector('#carrinho__valor');
const finalizar = document.querySelector('.carrinho__finalizar');
const clear = document.querySelector('.limpar');

var c = 0;
internet.forEach(plano => {
    plano.addEventListener('click', evento => {
        console.log(evento.target.dataset.valor);
    
    })
})

internet.forEach(plano => {
    plano.addEventListener('click', evento => {
        
        const botoes = document.querySelectorAll('.internet__adicionar'); 
        const fixo = document.querySelector('.fixo');    
        desabilita(botoes.length , botoes);
        
        evento.path[2].style.cssText = 'background: #aeb3cb;';
        

        fixo.style.cssText = 'visibility:visible;' + 
        'opacity: 1;' + 
        'transition: visibility 0s linear 0s, opacity 500ms;';

        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        c = parseFloat(c) + parseFloat(selecionadoValor);
        console.log(c);

        carrinhoValor.textContent='R$'+''+ c.toFixed(2);

        const li = document.createElement("li");

        li.appendChild(document.createTextNode('Internet' + ' ' + selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    }
    )
})
fixo.forEach(plano =>{
    plano.addEventListener('click', evento => {
        
        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        const tv = document.querySelector('.tv');

        const botoes = document.querySelectorAll('.fixo__adicionar');      
        desabilita(botoes.length , botoes);


        tv.style.cssText = 'visibility:visible;' + 
        'opacity: 1;' + 
        'transition: visibility 0s linear 0s, opacity 500ms;';
        
        evento.path[2].style.cssText = 'background: #aeb3cb;';

        c = parseFloat(c) + parseFloat(selecionadoValor);
        console.log(c);


        carrinhoValor.textContent='R$'+''+ c.toFixed(2);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    })
})

tv.forEach(plano =>{
    plano.addEventListener('click', evento => {
        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        
        const botoes = document.querySelectorAll('.tv__adicionar');      
        desabilita(botoes.length , botoes);

        c = parseFloat(c) + parseFloat(selecionadoValor);
        console.log(c);
        evento.path[2].style.cssText = 'background: #aeb3cb;';
        carrinhoValor.textContent='R$'+''+ c.toFixed(2);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    })
})

clear.addEventListener('click', evento => {
    limparCarrinho();    
})

function desabilita(tam,botoes){

    for( var i=0; i < tam ; i++){
        botoes[i].disabled=true;
    }
}
function habilita(){
    const botoesGeral = document.getElementsByTagName('button');
    for( var i=0; i < botoesGeral.length ; i++){
        botoesGeral[i].disabled=false;
    }
}
function limparCarrinho(){
    const todosPlanos = document.querySelectorAll('.plano');
    const fixo = document.querySelector('.fixo');
    const tv = document.querySelector('.tv');

    c=0;
    carrinhoValor.textContent='R$'+''+ c.toFixed(2);
    lista.innerHTML='';
    habilita();
    for(var i=0; i < todosPlanos.length ; i++){
        todosPlanos[i].style.cssText = 'background: #ffffff;';
    }
    fixo.style.cssText = 'opacity: 0;';
    tv.style.cssText = 'opacity: 0;';
}