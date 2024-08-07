let menuActive = false;
const menuButton = document.querySelector(".dropbutton");
const dropContent = document.querySelector(".dropcontent");
const btnText = document.querySelector("#dropbuttontext");

menuButton.addEventListener("click", () => {
    if (!menuActive)
    {
        dropContent.style.display = "flex";
        btnText.innerText = "V";
        animate({
            timing(timeFraction){return easeOutCubic(timeFraction)},
            draw(progress) {dropContent.style.top = lerp(-50, 45, progress) + 'px';},
            duration: 500
        });
        menuActive = true;
    }
    else
    {
        btnText.innerText = "-";
        animate({
            timing(timeFraction){return easeInCubic(timeFraction)},
            draw(progress) {
                dropContent.style.top = lerp(45, -50, progress) + 'px';
            },
            duration: 400
        });
        menuActive = false;
    }
});

//timing and draw are functions, duration is time in ms
function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // calculate the current animation state
      let progress = timing(timeFraction)
  
      draw(progress); // draw it
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}

function lerp(a, b, alpha)
{
    return a + alpha * (b-a);
}

function easeInCubic(timeFraction)
{
    return Math.pow(timeFraction, 3);
}

function easeOutCubic(timeFraction)
{
    return 1 - easeInCubic(1-timeFraction);
}