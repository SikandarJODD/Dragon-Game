console.log("Hello");
let jumpBtn = document.getElementById("denoJump");
let jumpCount = document.getElementById("scoreCont");

window.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        // jumpBtn.click();
        jumpBtn.classList.add("animateDino");
        jumpCount.innerHTML = parseInt(jumpCount.innerHTML) + 10;
    }
    setTimeout(() => {
        jumpBtn.classList.remove("animateDino");
    }, 2000);
});

let pathObj = document.querySelector(".obstacleAni");
let leftVal = Math.floor(pathObj.getBoundingClientRect().left);
let orginalText = document.getElementById("gameOver")
let fifi = setInterval(() => {
    let logi = Math.floor(pathObj.getBoundingClientRect().left);
    let clearJump = Math.floor(jumpBtn.getBoundingClientRect().top);
    if ((logi < 250 && logi > 20) && clearJump > 500) {
        // clearInterval(fifi);
        // alert("Game Over");
        orginalText.innerHTML = "Game Over";
        pathObj.style.animation = "none";
    }
}, 200);







