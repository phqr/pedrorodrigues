// função para fazer a mudança de tela
function mudaTela(e) {
    // o id da tela que se quer exibir está armazenado no atributo 'data-paraabrir' do link
    let telaParaExibir = e.target.dataset.paraabrir

    let telas = document.getElementsByClassName('tela')
    for (let tela of telas) {
        if (tela.id == telaParaExibir) {
            tela.classList.remove('hide')
            document.title = `${e.target.innerText} | PH`
        } else {
            tela.classList.add('hide')
        }
    }
}

// lista com os ids de todos os links do menu
let todos_os_ids = [
    'menu_home',
    'menu_formacao',
    'menu_portifolio',
    'menu_contato',
]

// e itera sobre eles adicionando o evento para mudar de tela
todos_os_ids.forEach(id => {
    document.getElementById(id).addEventListener('click', mudaTela)
})
