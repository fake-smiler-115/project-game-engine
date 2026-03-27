const players = ["rashmika", "mohanthi"];

const fetchCurrentPlayer = async (count) => players[count % 2];

let count = 0;

const renderPage = (currentPlayer, container) => {
  const user = container.querySelector("#current-player");
  user.textContent = currentPlayer;
};

window.onload = () => {
  const container = document.querySelector("#game-setup");
  const btn = document.querySelector("#next-player");

  btn.addEventListener("click", () => {
    count++;
    fetchCurrentPlayer(count).then((data) => renderPage(data, container));
  });

  console.log({ container });
  fetchCurrentPlayer(count).then((data) => renderPage(data, container));
};
