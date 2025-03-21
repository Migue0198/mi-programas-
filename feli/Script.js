window.startFlowerAnimation = function () {
    console.log("Función startFlowerAnimation ejecutada");

    function createFlower() {
        const flower = document.createElement("img");
        flower.src = "https://th.bing.com/th/id/OIP.aRYswKA7bl0587a18iG1pgHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // Imagen de flor
        flower.className = "flowers";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.position = "absolute";
        flower.style.top = "0px";
        flower.style.width = "100px";
        document.body.appendChild(flower);

        // Animación de caída
        let yPos = 0;
        let fallInterval = setInterval(() => {
            yPos += 2;  // Velocidad de caída
            flower.style.top = yPos + "px";
            if (yPos > window.innerHeight) {
                clearInterval(fallInterval);
                flower.remove();
            }
        }, 20);
    }

    setInterval(createFlower, 500);

    // Mostrar ramo de rosas en el centro
    let bouquet = document.getElementById("bouquet");
    if (!bouquet) {
        bouquet = document.createElement("img");
        bouquet.id = "bouquet";
        bouquet.src = "https://i.ebayimg.com/images/g/8IoAAeSwmJ9nofXg/s-l960.webp"; // Imagen de ramo de rosas
        bouquet.style.position = "fixed";
        bouquet.style.left = "60%";
        bouquet.style.top = "70%";
        bouquet.style.transform = "translate(-60%, -70%)";
        bouquet.style.width = "400px";
        bouquet.style.zIndex = "10";
        document.body.appendChild(bouquet);
    }
};
