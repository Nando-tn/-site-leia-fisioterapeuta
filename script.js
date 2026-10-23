
document.addEventListener("click",(event) => {
    if(event.target.tagName === "A"){
        if(event.target.hash){
            const secao = document.querySelector(event.target.hash);
        
           
         secao.scrollIntoView({
            behavior: "smooth"
         });
       
        // NOVO: fecha o menu depois de clicar num link
         menuAberto = false;
         navegacao.classList.remove("aberto");
         menu.textContent = "☰";

        }   // fecha o if(event.target.hash)
    }       // fecha o if(event.target.tagName === "A")
}); 
//     const sobre =  document.querySelector("#sobre");
// sobre.textContent = "Minha história";
const header = document.querySelector("header");
window.addEventListener("scroll", function(){


    if(window.scrollY > 100){
        header.classList.add("rolou");
        
    }else{
        header.classList.remove("rolou")
    }

});
const menu = document.querySelector("#menu");

let menuAberto = false;
const navegacao = document.querySelector("#nav");

menu.addEventListener("click", function(event){
    

menuAberto = !menuAberto;

if(menuAberto){
        navegacao.classList.add("aberto");
        menu.textContent = "X";
    }else{
        navegacao.classList.remove("aberto");
        menu.textContent = "☰";
    }
    
// navegacao.classList.add('aberto');
});

