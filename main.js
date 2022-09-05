var planos = document.querySelectorAll('#plano');
var carrinho = 0;

/*Evento de clique para selecionar os inputs dos planos*/

planos.forEach(plano => {
    plano.addEventListener('click', event => {
        const selecionado = event.target;
        console.log(selecionado.value);
    }
    )
})



