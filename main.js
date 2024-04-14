const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");
for(let i=0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            abas[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        abas[i].classList.add("ativo");
    }
}

const tempoObjetivo1 = new Date("2024-11-30T00:00:00");
const tempoObjetivo2 = new Date("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date("2024-12-10T00:00:00");
const tempoObjetivo4 = new Date("2024-12-15T00:00:00");
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function calculaTempo(tempoObjetivo){
  let tempoAtual = new Date(); 
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal/1000);
  let minutos = Math.floor(segundos/60);
  let horas= Math.floor(minutos/60);
  let dias = Math.floor(horas/24);
  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  return {dias, horas, minutos, segundos};
}

function atualizaCronometro(){
    for(let i=0; i<tempos.length;i++){
        let contador = document.querySelector("#contador"+(i+1));
        let tempo = calculaTempo(tempos[i]);
        contador.innerHTML = `
            <div class="contador-digito">
                <p class="contador-digito-numero">${tempo.dias}</p>
                <p class="contador-digito-texto">dias</p>
            </div>
            <div class="contador-digito">
                <p class="contador-digito-numero">${tempo.horas}</p>
                <p class="contador-digito-texto">horas</p>
            </div>
            <div class="contador-digito">
                <p class="contador-digito-numero">${tempo.minutos}</p>
                <p class="contador-digito-texto">min</p>
            </div>
            <div class="contador-digito">
                <p class="contador-digito-numero">${tempo.segundos}</p>
                <p class="contador-digito-texto">seg</p>
            </div>
        `;
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();