#!/usr/bin/env python3.9

import dominate
from dominate.tags import *
from dominate.util import raw

h = html()
h += head(title('$ til'), link(rel='stylesheet', type='text/css', href='https://www.oilshell.org/css/blog-bundle-v3.css'))
h += script(src='https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js')
h += script('mermaid.initialize({startOnLoad:true});')
h += h1('$ til')
h += p('welcome to my "today i learned repository" - filled with short entries of information for reference & retention.')
h += comment('toc')
h += p(a(href='#vim'))
h += comment('mermaid-lang')

print(h)
