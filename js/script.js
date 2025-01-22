var capturaDias = document.querySelector(".contDias");
const dtInicio = new Date("2024-08-25");
const dtAtual = new Date(); // Data Atual
const diferencaMilissegundos = dtAtual.getTime() - dtInicio.getTime();

// Convertendo milissegundos em dias
const diferencaEmDias = Math.floor(
  diferencaMilissegundos / (1000 * 60 * 60 * 24)
);
capturaDias.innerHTML = diferencaEmDias;

/* 
    Existem 1000 milissegundos em um segundo
    60 segundos em um minuto
    60 minutos em uma hora
    24 horas em um dia

    Por isso, dividimos por: 1000 * 60 * 60 * 24

*/

capturaDias.innerHTML = diferencaEmDias;
