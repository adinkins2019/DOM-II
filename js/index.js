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
    event.target.style.backgroundColor = "#17A2B8";
    event.target.style.color = "white";
    }
  );
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
});

const contentSec = document.querySelector('.content-section');
//console.log(contentSec);
const contentDest = document.querySelector('.content-destination');
window.addEventListener('load', () => {
    contentSec.style.backgroundColor = "#17A2B8";
    contentDest.style.backgroundColor = "#17A2B8";

});

window.addEventListener('beforeunload', confirm("Are you sure that you want to leave this page?"));