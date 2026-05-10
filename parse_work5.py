from bs4 import BeautifulSoup

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

container = soup.find('div', class_='elementor-element-82f3128')
if container:
    # Print the immediate children of the container
    children = container.find_all(recursive=False)
    print("Number of immediate children:", len(children))
    
    # We want to see how these images are grouped. Are they in individual wrapper divs?
    img_tags = container.find_all('img')
    print("Found", len(img_tags), "images")
    for img in img_tags[:3]:
        # get parent tree of img inside container
        path = []
        p = img.parent
        while p and p != container:
            path.append(p.name + ('.' + '.'.join(p.get('class', [])) if p.get('class') else ''))
            p = p.parent
        print("IMG:", img.get('src'))
        print("Path:", ' -> '.join(reversed(path)))
        
