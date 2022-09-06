// var planoInternet = document.querySelectorAll('#plano__internet');


var planos = document.querySelectorAll('.plano');




var cart = 0;
/*Evento de clique para selecionar os inputs dos planos*/
planos.forEach(plano => {
    plano.addEventListener('click', evento => {

        console.log(evento.target);
        const selecionadoValor = evento.target.dataset.valor
        const selecionadoNome = evento.target.dataset.nome

        console.log(selecionadoValor);
        console.log(selecionadoNome);
    }
    )
})



// planoInternet.forEach(plano => {
//     plano.addEventListener('click', event => {
//         const selecionadoValor = event.target.dataset.valor;
//         console.log(selecionadoValor);


        
//         cart = (parseFloat(cart) + parseFloat(selecionadoValor.dataset.valor)).toFixed(2);
//         document.querySelector('#carrinho__valor').innerHTML = 'R$' + cart;
//     }
//     )
// })