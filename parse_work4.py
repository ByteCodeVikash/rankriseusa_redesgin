from bs4 import BeautifulSoup

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

parent = soup.find('div', class_='elementor-element-9e541f4')
if parent:
    next_sibling = parent.find_next_sibling('div')
    while next_sibling:
        print("Sibling Class:", next_sibling.get('class'))
        for child in next_sibling.descendants:
            if child.name in ['h2', 'h3', 'h4', 'a', 'p', 'img']:
                if child.name == 'img':
                    print('  IMG:', child.get('src')[:100] if child.get('src') else 'None')
                elif child.name == 'a':
                    print('  LINK:', child.get('href'), child.text.strip())
                else:
                    text = child.text.strip()
                    if text: print(f'  {child.name.upper()}:', text[:100])
        next_sibling = next_sibling.find_next_sibling('div')
        if not next_sibling: break
