import requests
from bs4 import BeautifulSoup


URL = "https://www.buondua.com"  # Replace with the website's URL
# getURL = requests.get(URL, headers={"User-Agent":"Mozilla/5.0"})

# corsApiHost = "https://cors-anywhere.herokuapp.com/"
# URL = f"{corsApiHost}buondua.com/"
getURL = requests.get(URL, headers={"User-Agent":"Mozilla/5.0"})

soup = BeautifulSoup(getURL.text, 'html.parser')
images = soup.find_all('img')

imageSources = []
for image in images:
    imageSources.append(image.get('src'))

print(imageSources)
