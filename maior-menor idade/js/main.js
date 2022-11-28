let qtd_idd = prompt('quantas idades?')
let idd = []
let maior = 0
let menor = 0

for(let i = 0; i<qtd_idd; i++){
    idd[i] = prompt('insira uma idade')
    if (idd[i] > 18){
        maior ++
    }else{
        menor ++
    }
}

alert(`maior = ${maior}; menor = ${menor}`)
