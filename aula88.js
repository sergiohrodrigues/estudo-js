function rand(min = 0, max = 0) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false)
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// function executa(){
//     esperaAi('Frase 1', rand(1, 3))
//         .then(resposta => {
//             console.log(resposta)
//             return esperaAi('Frase 2', rand(1, 3))
//         })
//         .then(resposta => {
//             console.log(resposta)
//             return esperaAi('Frase 3', rand(1, 3))
//         })
//         .then(resposta => {
//             console.log(resposta)
//         })
//         .catch(e => {
//             console.log(e)
//         })
// }

async function executa() {
    try {
        const fase1 = esperaAi('Frase 1', 1000)
        console.log(fase1)

        setTimeout(() => {
            console.log('Essa promise estava pendente', fase1)
        }, 1100)

        const fase2 = await esperaAi('Frase 2', rand())
        console.log(fase2)
        const fase3 = await esperaAi('Frase 3', rand())
        console.log(fase3)

        console.log('Terminamos na frase: ' + fase3)
    } catch (e) {
        console.log(e)
    }
}

executa()

//pending -> pendente
//fullfiled -> resolvida
//rejected -> rejeitada