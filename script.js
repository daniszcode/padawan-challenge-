async function principal() {
  try {
    const respostaAsync = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const resposta = await respostaAsync.json();
    return mostrar(resposta);
  } catch (erro) {
    return "Ocorreu erro " + erro;
  }
}

principal();

function mostrar(userId) {
  var entrada = [];
  console.log(userId);
  userId.forEach((user) => {
    entrada.push(`  <ul class="table-post">
                    <li class="table-post--item">Id: ${user.id}</li>
                    <li class="table-post--item">Title: ${user.title}</li>
                    <li class="table-post--item">Body: ${user.body}</li> 
                    <ul>                    `);
  });

  document.querySelector("div.res").innerHTML = entrada.join("");
}

let sun = document.querySelector("#icon-sun");
let moon = document.querySelector("#icon-moon");

document.querySelector("#icon-sun").addEventListener("click", (event) => {
  console.log("clicou");
  document.querySelector(".nav-menu").className = "nav-menu---two";
  document.querySelector(".nav-menu--list").className = "nav-menu--list-two";
  document.querySelector(".menu-list--option").className =
    "menu-list--option-two";
});

//document.getElementById("button-animated").style.display = "flex"/*/
