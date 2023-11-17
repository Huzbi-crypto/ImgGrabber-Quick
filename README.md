# Introduction

This is another version of my [Image Grabber](https://github.com/Huzbi-crypto/Huzbi-ImgGrabber) extension that is made to just work. No details and no functionalities other than to click and download.

## Status

The code is in early stages.

The code can only get all images from the current active tab and download them. Right now, they can only run on a browser's console.

I've decided to add other languages' codes as well to see which ones perform better and with more functionality and ease.
Will try to see how it works by making a Firefox extension since Firefox is my go-to and I want to create one for my personal browser firstly. 🥸

### How to Run `main.js` on Browser Console

1. On Chrome, press `Ctrl+Shift+I` to open the browser's tool.
2. Click on the `Console` tab.
3. Copy and paste the code from `main.js` to the console.

#### Note

Since downloading this way does not work for several websites when the headers are not properly defined, it is better to download a CORS Unblocker extension. Any should work as long as it bypasses the "XMLHttpRequest" and "fetch" rejections by altering the "Access-Control-Allow-Origin" and "Access-Control-Allow-Methods" headers for every request that the browser receives.

The one I used is [CORS Unblock](https://webextension.org/listing/access-control.html).
