const internetBotoes = document.querySelectorAll('.internet__adicionar');
const fixoBotoes = document.querySelectorAll('.fixo__adicionar');
const tvBotoes = document.querySelectorAll('.tv__adicionar');


const planosFixo = document.querySelector('.fixo');
const planosTv = document.querySelector('.tv');

const lista = document.querySelector('#carrinho__planos');
var carrinhoValor = document.querySelector('#carrinho__valor');
const finalizar = document.querySelector('.carrinho__finalizar');
const clear = document.querySelector('.limpar');

var c = 0;


internetBotoes.forEach(plano => {
    plano.addEventListener('click', evento => {

        desabilita(internetBotoes.length , internetBotoes);

        evento.path[2].style.cssText = 'background: #aeb3cb;';

        planosFixo.style.cssText = 'visibility:visible;' + 
        'opacity: 1;' + 
        'transition: visibility 0s linear 0s, opacity 500ms;';

        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        c = parseFloat(c) + parseFloat(selecionadoValor);
        carrinhoValor.textContent='R$'+''+ c.toFixed(2);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode('Internet' + ' ' + selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    }
    )
})
fixoBotoes.forEach(plano =>{
    plano.addEventListener('click', evento => {

        desabilita(fixoBotoes.length , fixoBotoes);

        evento.path[2].style.cssText = 'background: #aeb3cb;';

        planosTv.style.cssText = 'visibility:visible;' + 
        'opacity: 1;' + 
        'transition: visibility 0s linear 0s, opacity 500ms;';

        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;     
        
        c = parseFloat(c) + parseFloat(selecionadoValor);
        carrinhoValor.textContent='R$'+''+ c.toFixed(2);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    })
})

tvBotoes.forEach(plano =>{
    plano.addEventListener('click', evento => {

        desabilita(tvBotoes.length , tvBotoes);

        evento.path[2].style.cssText = 'background: #aeb3cb;';

        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;     
        
        c = parseFloat(c) + parseFloat(selecionadoValor);
        carrinhoValor.textContent='R$'+''+ c.toFixed(2);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    })
})

clear.addEventListener('click', () => {
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

    c=0;
    carrinhoValor.textContent='R$'+''+ c.toFixed(2);
    lista.innerHTML='';
    habilita();
    for(var i=0; i < todosPlanos.length ; i++){
        todosPlanos[i].style.cssText = 'background: #ffffff;';
    }
    planosFixo.style.cssText = 'opacity: 0;';
    planosTv.style.cssText = 'opacity: 0;';
}