let menuActive = false;
const menuButton = document.querySelector(".dropbutton");
const dropContent = document.querySelector(".dropcontent");
const btnText = document.querySelector("#dropbuttontext");
dropContent.style.display = "none";

menuButton.addEventListener("click", () => {
    if (!menuActive)
    {
        dropContent.style.display = "flex";
        btnText.innerText = "V";
        menuActive = true;
    }
    else
    {
        dropContent.style.display = "none";
        btnText.innerText = "-";
        menuActive = false;
    }
});
