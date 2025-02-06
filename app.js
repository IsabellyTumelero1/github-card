function fnCarregarDados() {
    const url = "https://api.github.com/users/IsabellyTumelero1"

    fetch(url)
        .then(resposta => {
            return resposta.json()
        })
        .then(dados => {
            console.dir(dados)
        })

}