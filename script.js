// checando a senha
const senha = document.querySelector("#senha");
const checar = document.querySelector(".checar");
const informacoes = document.querySelector(".informacoes");

const warning =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/></svg>';

checar.addEventListener("click", () => {
  informacoes.innerHTML = "";
  let value = senha.value;
  if (senha.value.length === 0) {
    informacoes.innerHTML = "";
  } else if (
    /[0-9]/gm.test(value) &&
    /[a-z]/gm.test(value) &&
    /[A-Z]/gm.test(value) &&
    /[!@#$%*()_+^&{}}:;?.]/gm.test(value) &&
    value.length > 10
  ) {
    informacoes.innerHTML = "<h4>Parabéns! Sua senha é forte! :)</h4>";
  } else {
    informacoes.innerHTML = "<h4>Atenção!</h4>";
    if (!/[0-9]/gm.test(value)) {
      informacoes.innerHTML += `<div>${warning} <p>Não há nenhum número. Ex.: (0-9)</p></div>`;
    }
    if (!/[a-z]/gm.test(value)) {
      informacoes.innerHTML += `<div>${warning} <p>Não há nenhuma letra minúscula. Ex.: (a-z)</p></div>`;
    }
    if (!/[A-Z]/gm.test(value)) {
      informacoes.innerHTML += `<div>${warning} <p>Não há nenhuma letra maiúscula. Ex.: (A-Z)</p></div>`;
    }
    if (!/[!@#$%*()_+^&{}}:;?.]/gm.test(value)) {
      informacoes.innerHTML += `<div>${warning} <p>Não há nenhum caractere especial alfanúmerico. Ex.: (#,$,%)</p></div>`;
    }
    if (value.length < 10) {
      informacoes.innerHTML += `<div>${warning} <p>Senha muito curta (mínimo de 10 caracteres).</p></div>`;
    }
  }
});

// Gerar a senha aleatoria
const senhaAleatoria = document.querySelector("#aleatorio");
const gerarSenha = document.querySelector(".gerarSenha");

function progresso() {
  senhaAleatoria.value += ".";
}

const url =
  "https://passwordinator.herokuapp.com/generate?num=true&char=true&caps=true&len=20";

gerarSenha.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((senha) => {
      senhaAleatoria.value = "Gerando uma senha aleatória";

      let x = 0;
      let timer = setInterval(() => {
        progresso();
        x += 1;

        if (x === 4) {
          clearInterval(timer);
          senhaAleatoria.value = senha.data;
        }
      }, 1000);
    });
});
