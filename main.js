// LOGIC: Download all images from a webpage
async function downloadAllImages() {
    const images = document.getElementsByTagName('img');
    for (i = 0; i < images.length; i++) {
        const img = images[i];
        const url = img.src;
        const response = await fetch(url);
        const blob = await response.blob();
        const urlObject = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = urlObject;
        link.download = `image-${i}.jpg`;
        link.click();
        URL.revokeObjectURL(urlObject);
    }
}
downloadAllImages();