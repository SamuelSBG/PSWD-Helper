const senhaAleatoria = document.querySelector("#aleatorio");
const gerarSenha = document.querySelector(".gerarSenha");

const url =
  "https://passwordinator.herokuapp.com/generate?num=true&char=true&caps=true&len=20";

gerarSenha.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((senha) => {
      senhaAleatoria.value = senha.data;
    });
});
