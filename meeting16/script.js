const coba = document.getElementsByClassName("coba")

const newElement = document.createElement("p")
newElement.innerHTML ="coba create element";
coba[0].appendChild(newElement);

coba[0].removeChild(newElement)


