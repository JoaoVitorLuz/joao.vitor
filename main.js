function mostrarDiv(id) {
    const secoes = document.querySelectorAll('.content > div');
    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    const secaoAlvo = document.getElementById(id);
    if (secaoAlvo) {
        secaoAlvo.style.display = 'block';
        secaoAlvo.scrollIntoView({ behavior: 'smooth' });
    }
}

const informacoesPlantas = {
    tomate: {
        epocaPlantio: 'Primavera até início do Verão',
        colheita: '90 a 120 dias após o plantio',
    },
    alface: {
        epocaPlantio: 'Ano todo em regiões de clima ameno',
        colheita: '30 a 40 dias após o plantio',
    },
};

function mostrarCalendario(planta) {
    const calendarios = document.querySelectorAll('.calendario-especie');
    calendarios.forEach(calendario => {
        calendario.style.display = 'none';
    });

    if (planta) {
        const informacoes = informacoesPlantas[planta];
        const calendarioEspecie = document.getElementById('calendario-' + planta);
        if (informacoes && calendarioEspecie) {
            calendarioEspecie.innerHTML = `
                <h2>${planta.charAt(0).toUpperCase() + planta.slice(1)}</h2>
                <p>Época de Plantio: ${informacoes.epocaPlantio}</p>
                <p>Colheita: ${informacoes.colheita}</p>
            `;
            calendarioEspecie.style.display = 'block';
        }
    }
}
