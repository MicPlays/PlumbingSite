const imageContainer = document.querySelector(".images");

const img1 = document.createElement("img");
img1.src = "../images/hero.jpg";
img1.setAttribute("class", "galleryimg");
imageContainer.appendChild(img1);

const img2 = document.createElement("img");
img2.src = "../images/cheetohead.jpeg";
img2.setAttribute("class", "galleryimg");
imageContainer.appendChild(img2);

const img3 = document.createElement("img");
img3.src = "../images/cheetohead.jpeg";
img3.setAttribute("class", "galleryimg");
imageContainer.appendChild(img3);

const img4 = document.createElement("img");
img4.src = "../images/cheetohead.jpeg";
img4.setAttribute("class", "galleryimg");
imageContainer.appendChild(img4);

const images = document.querySelectorAll(".galleryimg");
let index = 0;

const arrows = document.querySelectorAll(".arrow");
arrows[0].addEventListener("click", SwipeLeft);
arrows[1].addEventListener("click", SwipeRight);

let imageWidth = 1000;
window.addEventListener("resize", OnWindowResize);
window.addEventListener("load", OnWindowResize);

function SwipeLeft()
{
    console.log("swipe left");
    index--;
    if (index < 0) index = images.length - 1;
    imageContainer.scroll(
        {
            left: imageWidth * index,
            behavior: "smooth"
        }
    );   
}

function SwipeRight()
{
    console.log("swipe right");
    index++;
    if (index > images.length - 1) index = 0;
    imageContainer.scroll(
        {
            left: imageWidth * index,
            behavior: "smooth"
        }
    );
}

function OnWindowResize()
{
    imageWidth = images[0].clientWidth;
    imageContainer.scroll(
        {
            left: (imageWidth * index),
            behavior: "instant"
        }
    );
}



