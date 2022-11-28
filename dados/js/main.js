let qtd_pessoas = prompt('quantas pessoas')
let altura = []
let m_alturaH = 0
let m_alturaM = 0
let m_altura = 0
let sexo = []
let homem = 0
let mulher = 0


for (let i = 0; i<qtd_pessoas; i++){
    
    sexo[i] = prompt(`sexo da pessoa ${i}`).toUpperCase()
    altura[i] = prompt(`altura da pessoa ${i}`)
    
    if (sexo[i] == 'HOMEM'){
        if (m_alturaH < altura[i]){
            m_alturaH = altura[i]
        }
        homem++
    } else if (sexo[i] == 'MULHER'){
        if (m_alturaM < altura[i]){
            m_alturaM = altura[i]
        }
        mulher++
    }

}

if (m_alturaH < m_alturaM){
    m_altura = `A maior altura é de uma mulher, sendo de: ${m_alturaM} metros`
}else{
    m_altura = `A maior altura é de um homem, sendo de: ${m_alturaH} metros`
}


alert(`homem: ${homem}; mulher: ${mulher}`)
alert(m_altura)

