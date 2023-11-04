// LOGIC: Download all images from a webpage
async function downloadAllImages() {
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
