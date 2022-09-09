var internet = document.querySelectorAll('.btn__adicionar');
const detalhes = document.querySelectorAll('.plano__detalhes');
var fixo = document.querySelectorAll('.plano__fixo');
var tv = document.querySelectorAll('.plano__tv');
var carrinho = document.querySelector('.carrinho');


const lista = document.getElementById('carrinho__planos');
var cart = 0;




// detalhes.forEach(detalhes => {
//     detalhes.addEventListener('click', evento =>{
        
//         console.log(evento.target);
//         console.log(evento);
//         const texto = evento.path[1].children[0];
//         const valor = evento.path[1].children[1];
//         const detalhe = evento.path[1].children[2];
//         console.log(evento.path[1]);
//         console.log(texto);
//         console.log(valor);
//         // texto.style.cssText = 'display: none;';
//         // valor.style.cssText = 'display: none;';
//         // detalhe.textContent = "- detalhes";

//         switch(evento.target.dataset.nome) {
//             case '300 MB':
//                 let btn__detalhe ='1';
//                 console.log("Primeiro caso");
//                 if(btn__detalhe =='1'){
                    
//                     texto.style.cssText = 'opacity: 0';
//                     valor.style.cssText = 'font-size: 0.8rem';
//                     valor.textContent = "Bonus: + 300 MB";
//                     detalhe.textContent = "- detalhes";
//                     btn__detalhe=0;
//                 }
//                 if(btn__detalhe =='0'){
//                     texto.style.cssText = 'opacity: 1';
//                     valor.style.cssText = 'font-size: 1rem';
//                     valor.textContent = "R$ 99,90";
//                     detalhe.textContent = "+ detalhes";
//                     btn__detalhe=0;
//                 }

//                 break;

//             case '200 MB':
//                 console.log("Segundo caso");
//                 detalhe.textContent = "- detalhes";
//                 break;

//             case '100 MB':
//                 console.log("Terceiro caso");
//                 detalhe.textContent = "- detalhes";
//                 break;

//             case 'ilimitado':
//                 console.log("Quarto caso");
//                 detalhe.textContent = "- detalhes";
//                 break;

//             case 'Ultimate HD':
//                 console.log("5 caso");
//                 detalhe.textContent = "- detalhes";
//                 break;

//             case 'Full HD':
//                 console.log("6 caso");
//                 detalhe.textContent = "- detalhes";
//                 break;
//         }


        // if(evento.target.dataset.nome=='300 MB'){
        //     console.log("Pirmeiro plano");
        // }
        // else{
        //     if(evento.target.dataset.nome=='200 MB'){
        //         console.log("Segundo plano");
        //     }
        //     else{
        //         console.log("Terceiro plano");
        //     }
        // }
//     })
// })
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