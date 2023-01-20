var listaObjetoProjetos = [
    {
        nome: "Projeto 1",
        tecnologias: ["HTML", "CSS", "JS"],
        descricao: "Descrição do projeto 1",
        link: "Link do projeto 1"
    },

    {
        nome: "Projeto 2",
        tecnologias: ["HTML", "CSS"],
        descricao: "Descrição do projeto 2",
        link: "Link do projeto 2"
    },

    {
        nome: "Projeto 3",
        tecnologias: ["HTML", "CSS", "JS", "API"],
        descricao: "Descrição do projeto 3",
        link: "Link do projeto 3"
    }
]

var listaProjetos = document.getElementById("listaProjetos")
var paginacaoListaProjetos = document.getElementById("paginacaoListaProjetos")

listaObjetoProjetos.forEach(element => {
    listaProjetos.innerHTML += `
    <div class="card bg-dark bg-gradient" style="width: 18rem;">
    <img src="https://www.flowup.me/blog/wp-content/uploads/2019/09/gest%C3%A3o-de-projetos-01.png"
        class="card-img-top" alt="...">
    <div class="card-body">
        <span class="badge text-info">${element.tecnologias}</span>
        <h5 class="card-title mt-2">${element.nome}</h5>
        <p class="card-text">${element.descricao}</p>
        <a href="${element.link}" class="btn btn-primary">Conferir</a>
    </div>
    </div>
    `
    // <span class="badge text-info">HTML</span>
    //     <span class="badge text-info">CSS</span>
    //     <span class="badge text-info">JS</span>
})

paginacaoListaProjetos.innerHTML += `
<nav aria-label="Paginacao de projetos">
<ul class="pagination justify-content-center">
    <li class="page-item disabled">
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
    </li>
    <li class="page-item disabled"><a class="page-link" href="#">1</a></li>
    <li class="page-item disabled"><a class="page-link" href="#">2</a></li>
    <li class="page-item disabled"><a class="page-link" href="#">3</a></li>
    <li class="page-item disabled">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    </li>
</ul>
</nav>
`