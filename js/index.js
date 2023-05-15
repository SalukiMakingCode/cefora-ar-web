let direction = "up";

export const builder = async() => {
    const sceneEl = document.querySelector('a-scene');

    sceneEl.addEventListener('loaded', () => {
        console.log("Scene loaded");

        console.log(document.getElementById("red"));
        console.log(document.getElementById("red").object3D.position);

        setInterval(() => {
            goAndBackX(document.getElementById("red"), 0.1);
            goAndBackZ(document.getElementById("car"), 0.1);
        }, 24);
    });
}

await builder();


const moveX = (element, move) => {
    const currentPosition = element.object3D.position.clone();
    currentPosition.x += move;
    element.setAttribute("position", currentPosition);
}

const moveY = (element, move) => {
    const currentPosition = element.object3D.position.clone();
    currentPosition.y += move;
    element.setAttribute("position", currentPosition);
}

const goAndBackX = (element, move) => {
    const currentPosition = element.object3D.position.clone();
    if (direction === "up" && currentPosition.x < 5) {
        currentPosition.x += move;
    }

    if (direction === "up" && currentPosition.x >= 5) {
        direction = "down";
    }

    if (direction === "down" && currentPosition.x > 0) {
        currentPosition.x -= move;
    }

    if (direction === "down" && currentPosition.x <= 0) {
        direction = "up";
        currentPosition.x += move;
    }

    element.setAttribute("position", currentPosition);
}

const goAndBackZ = (element, move) => {
    const currentPosition = element.object3D.position.clone();
    if (direction === "up" && currentPosition.z < 5) {
        currentPosition.z += move;
    }

    if (direction === "up" && currentPosition.z >= 5) {
        direction = "down";
    }

    if (direction === "down" && currentPosition.z > 0) {
        currentPosition.z -= move;
    }

    if (direction === "down" && currentPosition.z <= 0) {
        direction = "up";
        currentPosition.z += move;
    }

    element.setAttribute("position", currentPosition);
}