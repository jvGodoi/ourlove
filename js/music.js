const prev = document.querySelector(".voltar");
const playpause = document.querySelector(".pausar");
const next = document.querySelector(".proxima");
const audio = document.querySelector(".audio");
const title = document.querySelector(".titulo");
const singer = document.querySelector(".cantor");
const capa = document.querySelector(".capa");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress");
const currentTimeEl = document.querySelector(".current-time");
const durationEl = document.querySelector(".duration");

// Sons
const SongsList = [
  {
    path: "./musicas/Cor_de_Marte.mp3",
    Songname: "Cor de Marte",
    cantor: "ANAVITÓRIA",
    capa: "./img/capas/anavitoria.jpg",
  },
  {
    path: "./musicas/lifetime.mp3",
    Songname: "Lifetime",
    cantor: "Justin Bieber",
    capa: "./img/capas/justin.jpg",
  },
  {
    path: "./musicas/cars_outside.mp3",
    Songname: "Car's Outside",
    cantor: "James Arthur",
    capa: "./img/capas/james.jpg",
  },
  {
    path: "./musicas/dandelions.mp3",
    Songname: "Dandelions",
    cantor: "Ruth B.",
    capa: "./img/capas/ruthb.jpg",
  },
  {
    path: "./musicas/iris.mp3",
    Songname: "Iris",
    cantor: "Goo Goo Dolls",
    capa: "./img/capas/dolls.jpg",
  },
  {
    path: "./musicas/All_of_Me.mp3",
    Songname: "All Of Me",
    cantor: "John Legend",
    capa: "./img/capas/allofme.jpg",
  },
  {
    path: "./musicas/Ser_Humano_Ou_Anjo.mp3",
    Songname: "Ser Humano ou Anjo",
    cantor: "Matheus e Kauan",
    capa: "./img/capas/anjo.jpg",
  },
  {
    path: "./musicas/Until_I_Found_You.mp3",
    Songname: "Until I Found You",
    cantor: "Stephen Sanchez",
    capa: "./img/capas/you.jpg",
  },
  {
    path: "./musicas/janeiro.mp3",
    Songname: "De Janeiro a Janeiro",
    cantor: "Nando Reis",
    capa: "./img/capas/janeiro.jpg",
  },
  {
    path: "./musicas/dois_coracoes.mp3",
    Songname: "Dois Corações",
    cantor: "Melim",
    capa: "./img/capas/dois_coracoes.jpg",
  },
  {
    path: "./musicas/nao_te_largo.mp3",
    Songname: "Não te largo, Não te troco",
    cantor: "Ana Gabriela e Melim",
    capa: "./img/capas/nao_troco.jpg",
  },
];

let isPlaying = false;
let currentSongIndex = 0;

function playSong() {
  isPlaying = true;
  audio.play();
  playpause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playpause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

playpause.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

function loadSong(song) {
  title.textContent = song.Songname;
  singer.textContent = song.cantor;
  capa.src = song.capa;
  audio.src = song.path;
}

function PrevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = SongsList.length - 1;
  }
  loadSong(SongsList[currentSongIndex]);
  if (isPlaying) playSong();
}

function NextSong() {
  currentSongIndex++;
  if (currentSongIndex > SongsList.length - 1) {
    currentSongIndex = 0; // Volta para o início
  }
  loadSong(SongsList[currentSongIndex]);
  if (isPlaying) playSong();
}

prev.addEventListener("click", PrevSong);
next.addEventListener("click", NextSong);

// Carregar a primeira música ao iniciar
loadSong(SongsList[currentSongIndex]);

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

// Atualizar barra de progresso e tempo
function updateProgress() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progressBar.style.width = `${(currentTime / duration) * 100}%`;
  currentTimeEl.textContent = formatTime(currentTime);
  if (!isNaN(duration)) {
    durationEl.textContent = formatTime(duration);
  }
}

// Configurar evento de clique na barra de progresso
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

// Adicionar evento para atualizar o progresso durante a reprodução
audio.addEventListener("timeupdate", updateProgress);

// Atualizar o tempo total da música ao carregá-la
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});
