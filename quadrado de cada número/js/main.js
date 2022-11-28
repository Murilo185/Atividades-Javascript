let n = []
let square = []

for (let i = 0; i <5; i++){
    n[i] = Number(prompt('insira um número'))
    square[i] = Number(Math.sqrt(n[i])).toFixed(2)
}

alert(square)