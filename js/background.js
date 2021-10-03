const images = ["0.jpg","1.jpg","2.jpg"]

const chosenImag = images[Math.floor(Math.random()*images.length)];

const bgstyle = document.createElement("style");

bgstyle.innerText = `body { background : url(img/${chosenImag})no-repeat center center fixed rgba(0, 0, 0, 0.6);
background-blend-mode: multiply; background-size: cover}`;

document.body.appendChild(bgstyle)
