from bs4 import BeautifulSoup
import sys

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

print("HEADERS:")
for h in soup.find_all(['h1', 'h2', 'h3']):
    print(h.name, h.text.strip())

