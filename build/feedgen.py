#!/usr/bin/env python3

# from feedgen import FeedGenerator
import feedgen as feed
fg = feed.FeedGenerator()
fe = fg.add_entry()
atomfeed = fg.atom_str(pretty=True) # Get the ATOM feed as string
rssfeed  = fg.rss_str(pretty=True) # Get the RSS feed as string
fg.atom_file('atom.xml') # Write the ATOM feed to a file
fg.rss_file('rss.xml') # Write the RSS feed to a file
fg.id('http://lernfunk.de/media/654321')
fg.title('Some Testfeed')
fg.author( {'name':'John Doe','email':'john@example.de'} )
fg.link( href='http://example.com', rel='alternate' )
fg.logo('http://ex.com/logo.jpg')
fg.subtitle('This is a cool feed!')
fg.link( href='http://larskiesow.de/test.atom', rel='self' )
fg.language('en')
fg.rss_str(pretty=True)
fg.rss_file('rss.xml')
