import chickenImage from "./img/fried-chicken-breast-with-vegetables.jpg"

function loadHomePageFn(){
    //Get ID of content
    const content = document.getElementById("content")

    //Creating a div with class "card"
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card");  

    //Creates a header with text, appends to cardDiv
    const cardHeader = document.createElement("h2")
    cardHeader.textContent = "Look at how amazing this restaurant is!"
    cardDiv.appendChild(cardHeader);

    //Creates cardImage, imports from files, appends to cardImage
    const cardImage = document.createElement("img")
    cardImage.src = chickenImage;
    cardDiv.appendChild(cardImage)

    //Appends to DOM
    content.appendChild(cardDiv)

    const descriptionDiv = document.createElement("div")
    descriptionDiv.classList.add("card","description")
    const descriptionP = document.createElement("p")
    descriptionP.textContent="This fabulous meal will be the cheapest and most delicious meal in the universe."
    descriptionDiv.appendChild(descriptionP)

    content.appendChild(descriptionDiv)
}


export {loadHomePageFn}
