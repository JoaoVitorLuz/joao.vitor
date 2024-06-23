function showDiv(id) {
    const sections = document.querySelectorAll('.content > div');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
function reloadPage() {
    window.location.reload();
}
function mostrarCalendario(planta) {
    const calendarios = document.querySelectorAll('.calendario-especie');
    calendarios.forEach(calendario => {
        calendario.style.display = 'none';
    });
    if (planta) {
        const calendarioEspecie = document.getElementById('calendario-' + planta);
        if (calendarioEspecie) {
            calendarioEspecie.style.display = 'block';
        }
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
    const informacoes = informacoesPlantas[planta];
    const conteudoCalendario = document.getElementById('conteudo-calendario');

    if (informacoes) {
        conteudoCalendario.innerHTML = `
            <h2>${planta.charAt(0).toUpperCase() + planta.slice(1)}</h2>
            <p>Época de Plantio: ${informacoes.epocaPlantio}</p>
            <p>Colheita: ${informacoes.colheita}</p>
        `;
    } else {
        conteudoCalendario.innerHTML = '';
    }
}
function mostrarCalendario(planta) {
    const calendarios = document.querySelectorAll('.calendario-especie');
    calendarios.forEach(calendario => {
        calendario.style.display = 'none';
    });

    const informacoes = informacoesPlantas[planta];
    const conteudoCalendario = document.getElementById('calendario-' + planta);

    if (informacoes && conteudoCalendario) {
        conteudoCalendario.innerHTML = `
            <h2>${planta.charAt(0).toUpperCase() + planta.slice(1)}</h2>
            <p>Época de Plantio: ${informacoes.epocaPlantio}</p>
            <p>Colheita: ${informacoes.colheita}</p>
        `;
        conteudoCalendario.style.display = 'block';
    }
}
