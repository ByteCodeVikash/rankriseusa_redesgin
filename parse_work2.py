from bs4 import BeautifulSoup

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

our_work_header = soup.find(lambda tag: tag.name in ['h2', 'h1', 'h3'] and 'Our Work' in tag.text)
if our_work_header:
    print("Found header:", our_work_header)
    parent = our_work_header.parent
    for _ in range(5):
        if parent:
            print("Parent class:", parent.get('class'))
            parent = parent.parent
    
    # Try to find the closest wrapper
    wrapper = our_work_header.find_parent('div', class_='elementor-section') or our_work_header.find_parent('div', class_='elementor-widget-wrap')
    if wrapper:
        print("\nWrapper classes:", wrapper.get('class'))
        print("\nSnippet of wrapper HTML:")
        print(wrapper.prettify()[:1000])
