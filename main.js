var planoInternet = document.querySelectorAll('#plano__internet');
var planoFixo = document.querySelectorAll('#plano__fixo');
var cart = 0;
/*Evento de clique para selecionar os inputs dos planos*/

planoInternet.forEach(plano => {
    plano.addEventListener('click', event => {
        const selecionado = event.target;
        console.log(selecionado);
        
        cart = (parseFloat(cart) + parseFloat(selecionado.value)).toFixed(2);
        document.querySelector('#carrinho__valor').innerHTML = 'R$' + cart;
        console.log(cart);
    }
    )
})


planoFixo.forEach(plano => {
    plano.addEventListener('click', event => {
        const selecionado = event.target;
        
        cart = (parseFloat(cart) + parseFloat(selecionado.value)).toFixed(2);
        document.querySelector('#carrinho__valor').innerHTML = 'R$' + cart;
        console.log(cart);
    }
    )
})