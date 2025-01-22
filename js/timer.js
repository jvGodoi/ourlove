function updateElapsedTime() {
  const now = new Date();
  const endOfDay = new Date();

  // Configura a hora do fim do dia para 23:59:59
  endOfDay.setHours(23, 59, 59, 999);

  // Obtém o horário do início do dia (00:00:00)
  const startOfDay = new Date();

  // Calcula a diferença em milissegundos
  const timeRemaining = endOfDay - now;

  // Converte para horas, minutos e segundos
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeRemaining / 1000) % 60)
    .toString()
    .padStart(2, "0");

  // Atualiza o conteúdo do elemento HTML
  document.querySelector(
    ".dias-contador"
  ).innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Atualiza o contador a cada segundo
setInterval(updateElapsedTime, 1000);

// Chamada inicial para evitar atraso de 1 segundo
updateElapsedTime();
