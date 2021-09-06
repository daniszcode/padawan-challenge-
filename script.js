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
  userId.forEach((user) => {
    entrada.push(`  <ul class="table-post">
                    <li class="table-post--item">Id: ${user.id}</li>
                    <li class="table-post--item">Title: ${user.title}</li>
                    <li class="table-post--item">Body: ${user.body}</li> 
                    <ul>                    `);
  });

  document.querySelector("div.res").innerHTML = entrada.join("");
}
