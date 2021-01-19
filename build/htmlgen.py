#!/usr/bin/env python3.9

import dominate
from dominate.tags import *
from dominate.util import raw

h = html()
h += head(title('$ til'), link(rel='stylesheet', type='text/css', href='https://github.com/oilshell/oil/web/blog.css'))
h += h2(code('$ til'))
h += p('welcome to my "today i learned repository" - filled with short entries of information for reference & retention.')
h += comment('toc')
h += p(a(href=''))

with h:
    with div(id='toc').add(div(id='toctitle' ('Table of Contents')):
        for i in ['vim', 'webdev', 'terminal', 'networking', 'concepts']:
            div(class='toclevel2', a(i.title(), href='#%s' % i))

h += comment('mermaid-lang')

print(h)
