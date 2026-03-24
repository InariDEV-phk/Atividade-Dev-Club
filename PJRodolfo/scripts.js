const convertButton = document.querySelector(".convert-button")
const currencySelector = document.querySelector(".currency-selector")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.getElementsByClassName("currency-value")[0]
    const convertedCurrency = document.getElementsByClassName("currency-value")[1]
    const dollarToday = 5.2
    const euroToday = 6.2

if(currencySelector.value == "dollar"){
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD",
    }).format(inputCurrencyValue/dollarToday);

}
if(currencySelector.value == "euro"){
    convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue/euroToday);
}    

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL",
    }).format(inputCurrencyValue);

}

function currencyChange(){
   const currencyName = document.getElementsByClassName("currency")[1]
   const currencyFlag = document.querySelector(".cflag")
   
    if(currencySelector.value == "dollar"){
   currencyName.innerHTML = "Dollar"
   currencyFlag.src = "./assets/usd.png"
   }
   
    if(currencySelector.value == "euro"){
   currencyName.innerHTML = "Euro"
   currencyFlag.src = "./assets/euro.png"
   }
convertValues()
}

currencySelector.addEventListener("change", currencyChange)
convertButton.addEventListener("click",convertValues)