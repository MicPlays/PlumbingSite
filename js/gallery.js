import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL} from 'firebase/storage';
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDpoka9iKxgTeTkmujs4ZA4UwX7DyNo1og",

  authDomain: "mechanicalwizards-569a0.firebaseapp.com",

  projectId: "mechanicalwizards-569a0",

  storageBucket: "mechanicalwizards-569a0.appspot.com",

  messagingSenderId: "887837050645",

  appId: "1:887837050645:web:fcf0b28f890ae528478b1c"

};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage, 'images');

const imageContainer = document.querySelector(".images");
let images = [];


listAll(storageRef)
    .then((res) => {
        res.items.forEach((itemRef) => {
            getDownloadURL(itemRef)
            .then((url) => {
                const img = document.createElement("img");
                img.src = url;
                img.setAttribute('class', "galleryimg");
                imageContainer.appendChild(img);
                images.push(img);
            });
        });
    }).catch((error) => {
        console.log("error listing items");
});


let index = 0;

const arrows = document.querySelectorAll(".arrow");
arrows[0].addEventListener("click", SwipeLeft);
arrows[1].addEventListener("click", SwipeRight);

const imageWidth = 1000;
window.addEventListener("resize", OnWindowResize);
//window.addEventListener("load", OnWindowResize);

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
    if (images[0] != null)
    {
        imageWidth = images[0].clientWidth;
        imageContainer.scroll(
            {
                left: (imageWidth * index),
                behavior: "instant"
            }
        );
    }
}



