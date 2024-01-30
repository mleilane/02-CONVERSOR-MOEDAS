//console.log("validando se a conexão está ok")


const convertButton = document.querySelector(".convert-button") //criamos uma variavel que pega o botão do html / mapeando o botão / buscamos o elemento pela classe
//console.log(convertButton)  validamos se o botão esta sendo chamado

const currencySelect = document.querySelector(".currency-select") //criando a variavel para mapear qual moeda queremos converter no elemento select 


//função para captar o valor do input e calcular o valor convertido
function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //criamos a variavel inputCurrencyValue que vai no input do HTML e pega o valor dele
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real que vamos converter 
    const currencyValueConverted = document.querySelector(".currency-value") //valor convertido / outras moedas 

    const dolarToday = 5.2 //criamos a variavel dolarToday e atribuimos o valor 5.2  - valor ficticio 
    const euroToday = 6.2 //criamos a variavel euroToday e atribuimos o valor 6.2  - valor ficticio
    const libraToday = 7.5  //criamos a variavel libraToday e atribuimos o valor 7.5  - valor ficticio


    if (currencySelect.value == "dolar") { //se o select estiver selecionado o valor de dolar, vai executar esse bloco
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) // pegamos o valor que a pessoa digitou e dividimos pelo dolar, e atribuimos ao currencyValueConverted
    }
    if (currencySelect.value == "euro") { //se  o select estiver selecionado o euro vai entrar nesse bloco
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday) // pegamos o valor que a pessoa digitou e dividimos pelo euro, e atribuimos ao currencyValueConverted

    }
    if (currencySelect.value == "libra") { //se  o select estiver selecionado a moeda libra vai entrar nesse bloco
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday) // pegamos o valor que a pessoa digitou e dividimos pela libra, e atribuimos ao currencyValueConverted

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)  // pegamos o valor em real que foi inserido para converter e colamos no campo  currencyValueToConvert, usamos a função numberFormat para formatar o numero 

} //na função Intl.NumberFormat 1º informamos o idioma, 2º o pais, 3º a moeda, 4º a abreviação da moeda oficial do pais


//toda vez que trocarmos a moeda vai chamar essa função 
function changeCurrency() {
    const currencyName = document.getElementById("currency-name") //aqui mapeamos o elemento
    const currencyImage = document.querySelector(".currency-img") //mapeando a imagem

    if (currencySelect.value == "dolar") { //caso o valor do select selecionado seja dolar 

        currencyName.innerHTML == "Dólar" // vai mudar o valor do texteo para Dólar
        currencyImage.src = "./assets/dolar.png"  // e a imagem 

    }
    if (currencySelect.value == "euro") { //caso o valor do select selecionado seja euro, vai executar ese bloco  

        currencyName.innerHTML = "Euro"  // mudando o texto para Euro
        currencyImage.src = "./assets/euro.png"  // e a imagem 

    }
    if (currencySelect.value == "libra") { //caso o valor do select selecionado seja libra, vai executar ese bloco  

        currencyName.innerHTML = "Libra"  // mudando o texto para libra
        currencyImage.src = "./assets/libra.png"  // e a imagem 

    }
    convertValue() //chamamos a função para mudar o valor depois de ter alterado a imagem e o texto
}


currencySelect.addEventListener("change", changeCurrency) // adicionamos um ouvinte de evento para captar toda vez que o elemento select mudar a moeda e chamar a função changeCurrency
convertButton.addEventListener("click", convertValue) //adicionando um ouvinte de evento para captar o clique do botão / toda vez que clicar vai chamar a função convertValue
