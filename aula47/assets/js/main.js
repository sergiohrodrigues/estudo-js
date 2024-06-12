const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

function finalizaRelogio() {
  clearInterval(timer);
}

// iniciar.addEventListener('click', function (event) {
//   finalizaRelogio()
//   iniciaRelogio();
//   iniciar.setAttribute('disabled', 'disabled');
//   relogio.style.color = 'black'
// });

// pausar.addEventListener('click', function (event) {
//   finalizaRelogio();
//   iniciar.removeAttribute('disabled');
//   relogio.style.color = 'red'
// });

// zerar.addEventListener('click', function (event) {
//   relogio.innerHTML = '00:00:00';
//   clearInterval(timer);
//   segundos = 0;
//   iniciar.removeAttribute('disabled');
//   relogio.style.color = 'black'
// });

//*****************OU**************************

document.addEventListener('click', (e) => {
  const el = e.target

  if( el.classList.contains('iniciar') ) {
    finalizaRelogio()
    iniciaRelogio();
    iniciar.setAttribute('disabled', 'disabled');
    relogio.style.color = 'black'
  }

  if( el.classList.contains('pausar') ) {
    event.preventDefault();
    finalizaRelogio();
    iniciar.removeAttribute('disabled');
    relogio.style.color = 'red'
  }

  if( el.classList.contains('zerar') ) {
    relogio.innerHTML = '00:00:00';
    clearInterval(timer);
    segundos = 0;
    iniciar.removeAttribute('disabled');
    relogio.style.color = 'black'
  }

})