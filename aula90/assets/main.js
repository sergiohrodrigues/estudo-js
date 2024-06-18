document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const resposta = await fetch(href);
    
        if(resposta.status !== 200) throw new Error('ERRO 404');
    
        const html = await resposta.text();
    
        carregaResultado(html);
    } catch (error) {
        console.log(error)
    }
}

function carregaResultado(response) {
    const conteudo = document.querySelector('.resultado');
    conteudo.innerHTML = response;
}