function rand (min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false)
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

const promises = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
]

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })


function baixapagina (){
    const emCache = true;

    if(emCache){
        return Promise.reject('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}
    

baixapagina()
    .then(dadosPagina => {
        console.log('then', dadosPagina)
    })
    .catch(e => console.log('catch', e))