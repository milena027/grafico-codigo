const url = 'https://raw.githubusercontent.com/milena027/graficos-link/refs/heads/main/dados%20globais'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas )
    const pessoasNoMundo = (dados.total_pessoas_analisadas )
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `A pesquisa foi feita com <span>${pessoasNoMundo} </span>  pessoas e que aproximadamente <span>${pessoasConectadas} </span> passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> lendo.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão acima da média que é 1 hora por dia.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
