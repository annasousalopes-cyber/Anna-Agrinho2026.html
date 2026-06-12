function entrarSite(){
    document.getElementById("entrada").style.display="none";
}

function mostrarMensagem(){

    const mensagens=[
        "🌱 O conhecimento é a semente do futuro.",
        "🚜 A educação transforma o campo.",
        "🌾 Cada estudante é parte da construção de um agro mais forte.",
        "🌿 Sustentabilidade hoje garante qualidade de vida amanhã."
    ];

    const sorteio =
    Math.floor(Math.random()*mensagens.length);

    document.getElementById("mensagem").innerHTML =
    mensagens[sorteio];
}

const acc =
document.getElementsByClassName("accordion");

for(let i=0;i<acc.length;i++){

    acc[i].addEventListener("click",function(){

        const panel=this.nextElementSibling;

        if(panel.style.display==="block"){
            panel.style.display="none";
        }else{
            panel.style.display="block";
        }

    });

}
