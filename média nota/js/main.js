let n= []
let qtd_n = prompt('insira a quantidade de notas')
let s = 0
let media = 0

for (var i = 0; i<qtd_n ; i++){

    n[i] = Number(prompt('insira a nota'))
    s += n[i]

}

media = s/i
alert(media)