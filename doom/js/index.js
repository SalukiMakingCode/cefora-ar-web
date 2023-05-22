export const builder = async() => {
    const sceneEl = document.querySelector('a-scene');

    sceneEl.addEventListener('loaded', () => {
        console.log("Scene loaded");
    });
}

await builder();
