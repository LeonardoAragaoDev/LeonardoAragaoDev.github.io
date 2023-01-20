var listaProjetos = document.getElementById("listaProjetos")
var paginacaoListaProjetos = document.getElementById("paginacaoListaProjetos")

for (let i = 1; i < 10; i++) {
    listaProjetos.innerHTML += `
    <div class="card bg-dark bg-gradient" style="width: 18rem;">
    <img src="https://www.flowup.me/blog/wp-content/uploads/2019/09/gest%C3%A3o-de-projetos-01.png"
        class="card-img-top" alt="...">
    <div class="card-body">
        <span class="badge text-info">HTML</span>
        <span class="badge text-info">CSS</span>
        <span class="badge text-info">JS</span>
        <h5 class="card-title mt-2">Projeto ${i}</h5>
        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            quasi dicta nesciunt ad vitae dolorum laudantium doloribus consectetur omnis, nam
            nihil
            quas ipsam aut pariatur, fuga ex ut consequuntur error?</p>
        <a href="#" class="btn btn-primary">Conferir</a>
    </div>
    </div>
    `
}

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