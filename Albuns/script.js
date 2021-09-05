async function principal() {
  try {
    const respostaAsync = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
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
                      <li class="table-post--item">Body: ${user.id}</li> 
                      <li class="table-post--item">Title: ${user.title}</li>
                     <ul>
                                         `);
  });

  document.querySelector("div.res").innerHTML = entrada.join("");
}
