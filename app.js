function fnCarregarDados() {
    const url = "https://api.github.com/users/IsabellyTumelero1"

    fetch(url)
        .then(resposta => {
            return resposta.json()
        })
        .then(dados => {
            fnCarregarDados(dados.avatar_url, dados.nome, dados.bio, dados.email, dados.twitter_username, dados.html_url, dados.instagram_username)
        })

}

function fnMostrarDados(foto, nome, resumo, email, twitter, github, instagram) {
    document.getElementById("foto").src = foto
    document.getElementById("nome").innerHTML = nome
    document.getElementById("resumo").innerHTML = resumo + "<br><strong id='email'></strong>"
    document.getElementById("email").innerHTML = email
    document.getElementById("twitter").href = twitter
    document.getElementById("github").href = github
    document.getElementById("instagram").href = instagram
}

let botao = document.getElementById("botao-carregar-dados")
botao.addEventListener("click", function(){
    // fnMostrarDados("fundo.jpg", "Isabelly Tumelero", "Querida", "isabellymartins301@gmail.com", "https://x.com", "https://github.com", "https://instagram.com")  --> teste
    fnCarregarDados()
})