// Your code goes here
const images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (event) => {
        event.target.style.transform = "scale(1.1)";
    });
    images[i].addEventListener('mouseover', (event) => {
        event.target.style.transform = "scale(1.1)";
    });
    images[i].addEventListener('mouseout', (event) => {
        event.target.style.transform = "scale(1.0)";
    });
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  btn.addEventListener( 'click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "#17A2B8";
    event.target.style.color = "white";
    }
  );
  btn.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "#17A2B8";
  });
}

);

const destinations = document.querySelectorAll('.destination');
destinations.forEach(destination => {
    destination.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "#17A2B8";
    });
    destination.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = "white";
    });
    destination.addEventListener('click',(event) => event.target.style.color = "red");
});

const contentSec = document.querySelector('.content-section');
//console.log(contentSec);
const contentDest = document.querySelector('.content-destination');
window.addEventListener('load', () => {
    contentSec.style.backgroundColor = "#17A2B8";
    contentDest.style.backgroundColor = "#17A2B8";

});

window.addEventListener('beforeunload', (event) => {
    
    event.preventDefault();
    event.confirm("Are you sure that you want to leave this page?");
    //Chrome requires this
    event.returnValue = ' ';

});

const formSection = document.createElement("section");
formSection.setAttribute("id", "formAction");
const mainContent = document.querySelector('.container.home');
mainContent.appendChild(formSection);

const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "fName");
nameLabel.textContent = "Name:           ";
const formAction = document.querySelector('#formAction');
formAction.appendChild(nameLabel);

const nameText = document.createElement("input");
nameText.setAttribute("id", "fName");
nameText.setAttribute("type", "text");
nameText.setAttribute("placeholder", "First Name Here");
formAction.appendChild(nameText);
nameText.addEventListener('keydown', (event) => {
    let keysPressed = event.keyCode;
    if ((keysPressed < 65) || (keysPressed > 90)) {
        alert("You have entered invalid text");
    }
})


const destinationChoices = ['Fun in The Sun', 'Mountain Excursion', 'Island Getaway'];

const beachDest = document.createElement("input");
const beachLabel = document.createElement("label");
beachLabel.textContent = destinationChoices[0];
beachDest.setAttribute("type", "radio");
beachDest.setAttribute("name", "destination");
beachDest.setAttribute("value","1");
formAction.appendChild(beachLabel);
formAction.appendChild(beachDest);

const mtnDest = document.createElement("input");
const mtnLabel = document.createElement("label");
mtnLabel.textContent = destinationChoices[1];
mtnDest.setAttribute("type", "radio");
mtnDest.setAttribute("name", "destination");
mtnDest.setAttribute("value","2");
formAction.appendChild(mtnLabel);
formAction.appendChild(mtnDest);

const islandDest = document.createElement("input");
const islandLabel = document.createElement("label");
islandLabel.textContent = destinationChoices[2];
islandDest.setAttribute("type", "radio");
islandDest.setAttribute("name", "destination");
islandDest.setAttribute("value","3");
formAction.appendChild(islandLabel);
formAction.appendChild(islandDest);

const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("name", "submitRequest");
submitBtn.setAttribute("value","Submit");
formAction.appendChild(submitBtn);

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    confirm("You would like to submit the following information:" + "\n" + "Name:" + nameText.value);
});
