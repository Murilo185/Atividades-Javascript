let qtd_nome = prompt('quantos nomes?   ')
let nome = []

for (let i = 0; i<qtd_nome; i++){
    nome[i] = prompt('insira um nome')
}

let reverso = nome.reverse()

alert(reverso)
