import { initializeApp } from 'firebase/app';
import { getStorage, ref as ref_storage, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as ref_database, onValue, off } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyDpoka9iKxgTeTkmujs4ZA4UwX7DyNo1og",
  authDomain: "mechanicalwizards-569a0.firebaseapp.com",
  databaseURL: "https://mechanicalwizards-569a0-default-rtdb.firebaseio.com",
  projectId: "mechanicalwizards-569a0",
  storageBucket: "mechanicalwizards-569a0.appspot.com",
  messagingSenderId: "887837050645",
  appId: "1:887837050645:web:fcf0b28f890ae528478b1c"
};

const entryPrototype = {};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const database = getDatabase(app);

Object.assign(Entry.prototype, entryPrototype);
const imageContainer = document.querySelector(".images");
const imageDesc = document.querySelector("#imagedesc");
let images = [];
let index = 0;

const imgRef = ref_database(database, 'entries');
onValue(imgRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const imgData = childSnapshot.val();
        images.push(new Entry(imgData.desc, imgData.url));
    })
    //imageDesc.innerText = images[0].text;
});

const arrows = document.querySelectorAll(".arrow");
arrows[0].addEventListener("click", SwipeLeft);
arrows[1].addEventListener("click", SwipeRight);

let imageWidth = 1000;
window.addEventListener("resize", OnWindowResize);
const galleryWindow = document.querySelector(".gallerywindow");
imageWidth = galleryWindow.clientWidth;
console.log(galleryWindow.clientWidth);
imageContainer.scroll(
    {
        left: 0,
        behavior: "instant"
    }
);

function Entry(text, imgURL)
{
    this.text = text;
    this.img = document.createElement("img");
    this.img.setAttribute('class', "galleryimg");
    imageContainer.appendChild(this.img);
    const itemRef = ref_storage(storage, imgURL);
    getDownloadURL(itemRef)
    .then((url) => {
        this.img.src = url;
    });
} 


function SwipeLeft()
{
    if (images[0] != null)
    {
        index--;
        if (index < 0) index = images.length - 1;
        imageContainer.scroll(
            {
                left: imageWidth * index,
                behavior: "smooth"
            }
        );
        //imageDesc.innerText = images[index].text;   
    }
}

function SwipeRight()
{
    if (images[0] != null)
    {
        index++;
        if (index > images.length - 1) index = 0;
        imageContainer.scroll(
            {
                left: imageWidth * index,
                behavior: "smooth"
            }
        );
        //imageDesc.innerText = images[index].text;   
    }
}

function OnWindowResize()
{
    if (images[0] != null)
    {
        imageWidth = images[0].img.clientWidth;
        imageContainer.scroll(
            {
                left: (imageWidth * index),
                behavior: "instant"
            }
        );
    }
}



