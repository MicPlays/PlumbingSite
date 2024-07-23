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
let imageWidth = img1.clientWidth;

const arrows = document.querySelectorAll(".arrow");
const leftarrow = arrows[0];
const rightarrow = arrows[1];

leftarrow.addEventListener("click", SwipeLeft);
rightarrow.addEventListener("click", SwipeRight);

window.addEventListener("resize", OnWindowResize);

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
    imageWidth = img1.clientWidth;
    imageContainer.scroll(
        {
            left: (imageWidth * index),
            behavior: "instant"
        }
    );
}