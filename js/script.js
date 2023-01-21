var listaObjetoProjetos = [
    {
        nome: "Meu site portfólio",
        tecnologias: ["HTML", "CSS", "JS", "Bootstrap"],
        descricao: "Meu site no qual faço de portfólio apresentando meus projetos.",
        linkCodigo: "https://github.com/Lewoaragao/lewoaragao.github.io",
        linkDemonstracao: "https://lewoaragao.github.io/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "App web gerenciador de tarefas",
        tecnologias: ["HTML", "CSS", "JS", "Bootstrap", "SQLite"],
        descricao: "Nesse app é possível se cadastrar, logar e gerenciar tarefas, tudo salvo somente no seu navegador.",
        linkCodigo: "https://github.com/Lewoaragao/APP-DE-TAREFAS",
        linkDemonstracao: "https://lewoaragao.github.io/APP-DE-TAREFAS/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "Gerador de conselhos",
        tecnologias: ["HTML", "CSS", "JS", "API"],
        descricao: "Um gerador de conselhos aleatórios onde os dados são trazidos através do consumo de uma API.",
        linkCodigo: "https://github.com/Lewoaragao/GERADOR-DE-CONSELHOS-FRONT-END-MENTOR",
        linkDemonstracao: "https://lewoaragao.github.io/GERADOR-DE-CONSELHOS-FRONT-END-MENTOR/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "Jogo da memória",
        tecnologias: ["HTML", "CSS", "JS"],
        descricao: "Jogo da memória com diferentes temas, diversão para toda família.",
        linkCodigo: "https://github.com/Lewoaragao/JOGO-DA-MEMORIA",
        linkDemonstracao: "https://lewoaragao.github.io/JOGO-DA-MEMORIA/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "Página de produto de comércio eletrônico",
        tecnologias: ["HTML", "CSS", "JS"],
        descricao: "Página onde exibe um produto e simula a compra do mesmo, com carrinho dinâmico e podendo retirar o item dele.",
        linkCodigo: "https://github.com/Lewoaragao/PAGINA-DO-PRODUTO-DE-COMERCIO-ELETRONICO-FRONT-END-MENTOR",
        linkDemonstracao: "https://lewoaragao.github.io/PAGINA-DO-PRODUTO-DE-COMERCIO-ELETRONICO-FRONT-END-MENTOR/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "Componente de QR code",
        tecnologias: ["HTML", "CSS"],
        descricao: "Design de componente de QR code que é uma tecnologia muito usada atualmente para marketing, principalmente de produtos.",
        linkCodigo: "https://github.com/Lewoaragao/COMPONENTE-QR-CODE-FRONT-END-MENTOR",
        linkDemonstracao: "https://lewoaragao.github.io/COMPONENTE-QR-CODE-FRONT-END-MENTOR/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "Componente de cartão de visualização NFT",
        tecnologias: ["HTML", "CSS"],
        descricao: "Design de componente para visualização de NFT.",
        linkCodigo: "https://github.com/Lewoaragao/COMPONENTE-DO-CARTAO-DE-VISUALIZACAO-NFT-FRONT-END-MENTOR",
        linkDemonstracao: "https://lewoaragao.github.io/COMPONENTE-DO-CARTAO-DE-VISUALIZACAO-NFT-FRONT-END-MENTOR/",
        caminhoImagem: "imgs/imgs-projetos/"
    },

    {
        nome: "Calculadora de gorjetas",
        tecnologias: ["HTML", "CSS"],
        descricao: "Calculadora onde é feito o cálculo das gorjetas divididas pelos amigos, por exemplo em um almoço.",
        linkCodigo: "https://github.com/Lewoaragao/CALCULADORA-DE-GORJETAS-FRONT-END-MENTOR",
        linkDemonstracao: "https://lewoaragao.github.io/CALCULADORA-DE-GORJETAS-FRONT-END-MENTOR/",
        caminhoImagem: "imgs/imgs-projetos/"
    }
]

var listaProjetosEmHtml = document.getElementById("listaProjetos")
var paginacaoListaProjetosEmHtml = document.getElementById("paginacaoListaProjetos")
var qtdProjetosAceitosPaginacao = 9
var qtdPaginas

listaObjetoProjetos.forEach((element, index) => {
    if(index < qtdProjetosAceitosPaginacao) {
        let listaTecnologias = ``
        element.tecnologias.forEach(e => {
            listaTecnologias += `<span class="badge text-primary bg-light m-1">${e}</span>`
        })
    
        listaProjetosEmHtml.innerHTML += `
        <div class="card bg-dark bg-gradient text-light" style="width: 16rem;">
        <img src="https://www.flowup.me/blog/wp-content/uploads/2019/09/gest%C3%A3o-de-projetos-01.png"
            class="card-img-top" alt="imagem de demonstração do projeto ${element.nome}">
        <div class="card-body">
            <h5 class="card-title mt-2">${element.nome}</h5>
            ${listaTecnologias}
            <p class="card-title mt-2">${element.descricao}</p>
        </div>
            <div class="d-flex justify-content-between align-items-center gap-3 p-4">
                <a href="${element.linkCodigo}" class="btn btn-secondary btn-sm mt-2" target="_blank">
                        <i class="fa-sharp fa-solid fa-code"></i>
                        Código
                    </a>
                    <a href="${element.linkDemonstracao}" class="btn btn-primary btn-sm mt-2" target="_blank">
                        <i class="fa-sharp fa-solid fa-eye"></i>
                        Conferir
                </a>
            </div>
        </div>
        `
    }

})

if (listaObjetoProjetos != null && listaObjetoProjetos.length > 0) {
    paginacaoListaProjetosEmHtml.innerHTML += `
        <li class="page-item">
            <a class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    `
    
    // debugger
    if (listaObjetoProjetos.length > qtdProjetosAceitosPaginacao) {
        calcularPaginas(listaObjetoProjetos.length, qtdProjetosAceitosPaginacao)
    } else {
        paginacaoListaProjetosEmHtml.innerHTML += `<li class="page-item"><a class="page-link">1</a></li>`
    }

    paginacaoListaProjetosEmHtml.innerHTML += `
            <li class="page-item">
                <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            `
}

function calcularPaginas(qtdTotal, qtdAceita) {
    qtdPaginas = qtdTotal / qtdAceita

    for (let i = 1; i <= qtdPaginas; i++) {
        paginacaoListaProjetosEmHtml.innerHTML += `
            <li class="page-item"><a class="page-link">${i}</a></li>
            `
    }

}