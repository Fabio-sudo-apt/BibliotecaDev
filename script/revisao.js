function up() {
  const url = "http://my-json-server.typicode.com/maujor/livros-json/livros";
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      let conteiner = document.querySelector(".conteudo");
      json.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let h3 = document.createElement("h3");
        h3.innerHTML = element.titulo;

        let img = document.createElement("img");
        img.setAttribute("src", element.imgCapa);
        img.setAttribute("alt", "Capa do livro");

        let p = document.createElement("p");
        p.innerHTML = `R$ ${element.preco},00`;
        let bnt = document.createElement("button");
        bnt.innerHTML = "Comprar";

        let tituloPreco = document.createElement("div");
        tituloPreco.appendChild(h3);
        tituloPreco.appendChild(p);
        tituloPreco.appendChild(bnt);

        div.appendChild(img);
        div.appendChild(tituloPreco);

        conteiner.appendChild(div);
      });
    });
}
let checkbox = document.getElementById("chk");

checkbox.addEventListener("change", () => {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  let h1 = document.querySelector("h1");
  h1.classList.toggle("dark-h1");
  let card = document.querySelectorAll('.card');
  card.forEach(element => {
    element.classList.toggle('dark-card')
  })
});

up();
