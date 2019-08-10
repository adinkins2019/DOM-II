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
  //btn.addEventListener('mouseover')
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

/*const mainContent = document.querySelector('.container .home');
mainContent.addEventListener('scroll', (event) => {
    event.target.
})*/