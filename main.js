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
        profundidadePlantio: '1 a 2 cm',
        distanciaPlantas: '50 a 60 cm',
        luzSolar: 'Pleno sol',
        frequenciaRega: 'Moderada, manter o solo úmido',
        tipoSolo: 'Bem drenado, rico em matéria orgânica',
        temperaturaIdeal: '20 a 30°C',
        resistenciaPragas: 'Moderada, suscetível a pulgões e fungos',
        dicasCultivo: 'Evitar encharcamento, podar regularmente para estimular o crescimento',
    },
    alface: {
        epocaPlantio: 'Ano todo em regiões de clima ameno',
        colheita: '30 a 40 dias após o plantio',
        profundidadePlantio: '0,5 cm',
        distanciaPlantas: '20 a 30 cm',
        luzSolar: 'Sol pleno a meia sombra',
        frequenciaRega: 'Frequente, solo sempre úmido',
        tipoSolo: 'Leve, bem drenado e rico em matéria orgânica',
        temperaturaIdeal: '15 a 25°C',
        resistenciaPragas: 'Baixa, suscetível a lesmas e caracóis',
        dicasCultivo: 'Evitar plantio em épocas muito quentes, proteger contra pragas com barreiras físicas',
    },
    cenoura: {
        epocaPlantio: 'Outono e Inverno',
        colheita: '70 a 80 dias após o plantio',
        profundidadePlantio: '0,5 a 1 cm',
        distanciaPlantas: '5 a 10 cm',
        luzSolar: 'Pleno sol',
        frequenciaRega: 'Moderada, manter o solo úmido',
        tipoSolo: 'Solto, arenoso e bem drenado',
        temperaturaIdeal: '10 a 25°C',
        resistenciaPragas: 'Alta, mas pode ser afetada por nematoides',
        dicasCultivo: 'Afrouxar o solo antes do plantio, evitar solos compactados',
    },
    batata: {
        epocaPlantio: 'Primavera e Verão',
        colheita: '90 a 120 dias após o plantio',
        profundidadePlantio: '10 a 15 cm',
        distanciaPlantas: '30 a 40 cm',
        luzSolar: 'Pleno sol',
        frequenciaRega: 'Moderada, evitar encharcamento',
        tipoSolo: 'Solto, bem drenado e rico em matéria orgânica',
        temperaturaIdeal: '15 a 25°C',
        resistenciaPragas: 'Moderada, suscetível a besouros e fungos',
        dicasCultivo: 'Amontoar terra ao redor das plantas para proteger os tubérculos',
    },
    espinafre: {
        epocaPlantio: 'Outono e Inverno',
        colheita: '40 a 50 dias após o plantio',
        profundidadePlantio: '1 a 2 cm',
        distanciaPlantas: '20 a 30 cm',
        luzSolar: 'Meia sombra',
        frequenciaRega: 'Frequente, solo sempre úmido',
        tipoSolo: 'Rico em matéria orgânica e bem drenado',
        temperaturaIdeal: '10 a 20°C',
        resistenciaPragas: 'Baixa, suscetível a pulgões e lagartas',
        dicasCultivo: 'Evitar plantio em épocas muito quentes, colher as folhas regularmente para estimular o crescimento',
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
                <p>Profundidade de Plantio: ${informacoes.profundidadePlantio}</p>
                <p>Distância entre Plantas: ${informacoes.distanciaPlantas}</p>
                <p>Luz Solar: ${informacoes.luzSolar}</p>
                <p>Frequência de Rega: ${informacoes.frequenciaRega}</p>
                <p>Tipo de Solo: ${informacoes.tipoSolo}</p>
                <p>Temperatura Ideal: ${informacoes.temperaturaIdeal}</p>
                <p>Resistência a Pragas: ${informacoes.resistenciaPragas}</p>
                <p>Dicas de Cultivo: ${informacoes.dicasCultivo}</p>
            `;
            calendarioEspecie.style.display = 'block';
        }
    }
}
