const convertButton = document.getElementById("convert-button")
const currencyChange = document.getElementById("converter-para")
const convertingChange = document.getElementById("converter-de")

function convertCurrency(){
    const inputValue = document.querySelector(".currency-input").value
    const currencyToConvert = document.getElementById("dinheiro-converter")
    const convertedCurrency = document.getElementById("dinheiro-convertido")
    
    const todayDollar = 5.2
    const todayEuro = 6.2

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br",{
        style:"currency",
        currency: "BRL",
    }).format(inputValue)

    if(currencyChange.value == "dollar"){
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD",
    }).format(inputValue/todayDollar)

}
    if(currencyChange.value == "euro"){
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency: "EUR",
    }).format(inputValue/todayEuro)
}

}

function countryChange(){
    const currencyName = document.getElementById("currency-to-convert")
    const flags = document.getElementsByClassName("flags")[1]

    if(currencyChange.value == "dollar"){
        currencyName.innerHTML = "Dollar"
        flags.src = "./assets/usd.png"
    }

     if(currencyChange.value == "euro"){
        currencyName.innerHTML = "Euro"
        flags.src = "./assets/euro.png"
    }

    if(currencyChange.value == "real"){
        currencyName.innerHTML = "Real"
        flags.src = "./assets/real.png"
    }

    convertCurrency()

}

function countryChange2(){
    const currencyName = document.getElementById("converting-from")
    const flags = document.getElementsByClassName("flags")[0]
    
    if(convertingChange.value == "real"){
        currencyName.innerHTML = "Real"
        flags.src = "./assets/real.png"
}

    if(convertingChange.value == "dollar"){
        currencyName.innerHTML = "Dollar"
        flags.src = "./assets/usd.png"
    }
       if(convertingChange.value == "euro"){
        currencyName.innerHTML = "Euro"
        flags.src = "./assets/euro.png"
    }
    convertCurrency()
}

convertingChange.addEventListener("change", countryChange2)
currencyChange.addEventListener("change", countryChange)
convertButton.addEventListener("click", convertCurrency)