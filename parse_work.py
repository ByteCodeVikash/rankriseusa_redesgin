from bs4 import BeautifulSoup

with open('/tmp/admark.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

our_work_header = soup.find('h2', string=lambda t: t and 'Our Work' in t)
if our_work_header:
    section = our_work_header.find_parent('section')
    if section:
        print(section.prettify()[:2000])
        print("-------")
        print("CLASSES:", section.get('class'))
        print("-------")
        # Print children summaries to understand structure
        for child in section.find_all(recursive=False):
            print(child.name, child.get('class'))
    else:
        print("No section parent found.")
else:
    print("Not found.")
