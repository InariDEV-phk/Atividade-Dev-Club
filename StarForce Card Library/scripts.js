const cardContainer = document.getElementById("card-container")
const cardContainer2 = document.getElementById("card-container2")


import {cardList } from "./cardlist"
import {cardList2} from "./cardlist2"



function showAllCards(){
    const obtainedCards = JSON.parse(localStorage.getItem("activeCards")) || [];

    let myLi =""

    cardList.forEach((card , index)=>{
        const isObtained = obtainedCards.includes(index); //<Here, sir JS-AI made so that the forEach used 
        // the index to label which card was active or not. Culminating in what we see below.
        
                //VVVV You can see here, that we made a class containing the conditions for each li to be
                        //active, then created a data-index and used the index from the forEach before!
    myLi += `
            <li class="${isObtained ? "active" : ""}" data-index="${index}">
                
                <img src=${card.src} alt="cannon">
                <p>ID:${card.id}</p>
                <p>Name:${card.name}</p>
                Type:<img src=${card.type}>
                <p>Damage:${card.damage}</p>
                
            </li>

    `
     }); //<Here's where the loop ends.

    cardContainer.innerHTML = myLi

    const allItems = cardContainer.querySelectorAll("li");

    allItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active"); //<This is where we configured the "changing color when active"
      // in CSS (made by sir CSS-AI)

    const updatedObtainedCards = Array.from(allItems) //Here, sir JS-AI used the array from before (allItems) to filter and map each card that was active.
        .filter(i => i.classList.contains("active"))    //It is also, recreating the array with "allItems" with only the active items! 
        .map(i => Number(i.dataset.index));//Here, it converts the atribute (which we get from data-index from the dynamic created <li> from before!) 
        // into a number, in order for localStorege to be able to save the state.

      localStorage.setItem("activeCards", JSON.stringify(updatedObtainedCards));//Here JSON.stringfy basically converts everything into a string in order to save it.
      //It then wrote it in updatedObtainedCards. Absolutely insane work!

    });
  });
}


showAllCards()


