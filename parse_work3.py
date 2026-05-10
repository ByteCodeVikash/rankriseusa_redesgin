from bs4 import BeautifulSoup
import re

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

parent = soup.find('div', class_='elementor-element-9e541f4')
if parent:
    # Print out text content or structure to understand what's in there
    for child in parent.descendants:
        if child.name in ['h2', 'h3', 'h4', 'a', 'p', 'img']:
            if child.name == 'img':
                print('IMG:', child.get('src'))
            elif child.name == 'a':
                print('LINK:', child.get('href'), child.text.strip())
            else:
                print(child.name.upper(), ':', child.text.strip())
else:
    print("Not found")
