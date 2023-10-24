import requests
from bs4 import BeautifulSoup
import os
import re

url = input("Enter the url of the webpage to download images from: ")
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})

soup = BeautifulSoup(response.text, 'html.parser')
images = soup.find_all('img')

directory = "fetchedImages"
if not os.path.exists(directory):
    os.makedirs(directory)

for i, image in enumerate(images):
    image_url = image.get('src')
    if 'http' not in image_url:
        image_url = '{}{}'.format(url, image_url)
    response = requests.get(image_url)
    filename = re.search(r'/([\w_-]+[.](jpg|gif|png))$', image_url)
    if not filename:
        print("Regex didn't match with the url: {}".format(image_url))
        continue
    with open(os.path.join(directory, 'image-{}.jpg'.format(i+1)), 'wb') as f:
        f.write(response.content)