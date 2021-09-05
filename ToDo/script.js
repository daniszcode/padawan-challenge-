async function principal() {
  try {
    const respostaAsync = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
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
    if (user.completed == true) {
      entrada.push(`  <ul class="table-post">
                            <li class="table-post--item">Title: ${user.title}</li>
                            <li class="table-post--item">Completed ❤️</li> 
                            <ul>                    `);
    } else {
      entrada.push(`  <ul class="table-post">
        <li class="table-post--item">Title: ${user.title}</li>
        <li class="table-post--item-false">Incomplete ⚔️</li> 
        <ul>                    `);
    }
  });

  document.querySelector("div.res").innerHTML = entrada.join("");
}
