from bs4 import BeautifulSoup

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

img = soup.find('img', src=lambda s: s and '18-1.png' in s)
if img:
    # Let's get the top-most section parent of this image
    parent = img.find_parent('div', class_='elementor-element')
    # Actually, let's find the e-con wrapper that contains this
    e_con = img.find_parent('div', class_='e-con')
    if e_con:
        print(e_con.prettify()[:1500])
