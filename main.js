async function scrollToBottom() {
    const totalHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;
    let distanceScrolled = 0;

    while (distanceScrolled < totalHeight) {
        window.scrollTo(0, distanceScrolled);
        distanceScrolled += viewportHeight;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// LOGIC: Download all images from a webpage
async function downloadAllImages() {
    await scrollToBottom();

    const divs = document.getElementsByClassName('album-photo my-2');
    let i = 0;
    for (let div of divs) {
        const images = div.getElementsByTagName('img');
        for (let img of images) {
            const url = img.src;
            const response = await fetch(url);
            const blob = await response.blob();
            const urlObject = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = urlObject;
            link.download = `image-${i}.jpg`;
            link.click();
            URL.revokeObjectURL(urlObject);
            i++;
        }
    }
}

downloadAllImages();

