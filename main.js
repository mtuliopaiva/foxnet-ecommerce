const internet = document.querySelectorAll('.internet__adicionar');
const fixo = document.querySelectorAll('.fixo__adicionar');
const tv = document.querySelectorAll('.tv__adicionar');



var carrinhoValor = document.querySelector('#carrinho__valor');
const finalizar = document.querySelector('.carrinho__finalizar');
const clear = document.querySelector('.limpar');
const lista = document.getElementById('carrinho__planos');

var c = 0;

internet.forEach(plano => {
    plano.addEventListener('click', evento => {
        
        const botaoInternet1 = evento.path[3].childNodes[1].childNodes[1].childNodes[7];
        const botaoInternet2 = evento.path[3].childNodes[3].childNodes[1].childNodes[7];
        const botaoInternet3 = evento.path[3].childNodes[5].childNodes[1].childNodes[7];

        botaoInternet1.disabled = true;
        botaoInternet2.disabled = true;
        botaoInternet3.disabled = true;
        
        const fixo = document.querySelector('.fixo');
        

        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        
        

        fixo.style.cssText = 'display: block;';
            
        console.log(selecionadoNome);
        console.log(selecionadoValor);

        c = parseFloat(c) + parseFloat(selecionadoValor);
        console.log(c);

        carrinhoValor.textContent='R$'+''+ c.toFixed(2);

        const li = document.createElement("li");

        li.appendChild(document.createTextNode(selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    }
    )
})
fixo.forEach(plano =>{
    plano.addEventListener('click', evento => {
        console.log(evento.target.dataset.nome);
        console.log(evento.target.dataset.valor);
        const botaFixo = evento.target.disabled = true;
        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        const tv = document.querySelector('.tv');

        tv.style.cssText = 'display: block;';

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
        const botatv1 = evento.path[3].childNodes[1].childNodes[1].childNodes[7];
        const botatv2 = evento.path[3].childNodes[3].childNodes[1].childNodes[7];
        const selecionadoNome = evento.target.dataset.nome;
        const selecionadoValor = evento.target.dataset.valor;
        botatv1.disabled =true;
        botatv2.disabled =true;
        console.log(evento.target.dataset.nome);
        console.log(evento.target.dataset.valor);

        c = parseFloat(c) + parseFloat(selecionadoValor);
        console.log(c);

        carrinhoValor.textContent='R$'+''+ c.toFixed(2);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(selecionadoNome));
        lista.appendChild(li); //adiciona um lista na ul
    })
})

