import { gameState } from "./main.js";

const modal = document.getElementById("controls-modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const gameScreen = document.querySelector(".game-screen");
const hud = document.getElementById("hud");
const fdd = document.getElementById("fdd");

export function openModal() {
  modal.classList.remove("hidden");
  gameScreen.classList.add("blurred");
  hud.classList.add("blurred");
  fdd.classList.add("blurred");
  gameState.isPaused = true;
}

// Fecha o modal e retoma o jogo
export function closeModal(gameState) {
  modal.classList.add("hidden");
  gameScreen.classList.remove("blurred");
  hud.classList.remove("blurred");
  fdd.classList.remove("blurred");
  gameState.isPaused = false;
}

// Evento para abrir o modal pelo botão com atraso
openModalButton.addEventListener("click", () => {
  setTimeout(() => {
    openModal(gameState);
  }, 400); // 400ms = meio segundo de atraso
});

// Evento para fechar o modal pelo botão
closeModalButton.addEventListener("click", () => {
  closeModal(gameState);
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "p") {
    if (modal.classList.contains("hidden")) {
      openModal(gameState);
    } else {
      closeModal(gameState);
    }
  }
});
