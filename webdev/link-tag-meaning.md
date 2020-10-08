<div id="username">

[UserPreferences](/wiki/pie/UserPreferences)

</div>

<div id="title">

[LinkTagMeaning](http://intertwingly.net/wiki/pie/LinkTagMeaning?action=fullsearch&value=LinkTagMeaning&literal=1&case=1&context=40)
---
</div>

------------------------------------------------------------------------

<div id="content" lang="en" dir="ltr">

The link tag can have different meanings based on the value of its 'rel'
and 'type' attributes.

<div>

|                  |                                   |             |                                                                                                                                                                                                                                                                                             |
|------------------|-----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Rel**          | **Type**                          | **Where**   | **Description**                                                                                                                                                                                                                                                                             |
| start            | application/atom+xml              | Entry\|Feed | Points to the Atom feed you would subscribe to with an aggregator                                                                                                                                                                                                                           |
| next             | application/atom+xml              | Feed        | Points to another Atom file in Feed format that contains the next set of entries, based on some linear ordering of entries. For example, a typical aggregator feed format would link in reverse chronological order.                                                                        |
| prev             | application/atom+xml              | Feed        | Points to another Atom file in Feed format that contains the previous set of entries, based on some linear ordering of entries.                                                                                                                                                             |
| comments         | application/atom+xml              | Feed        | An Atom Feed of all comments.                                                                                                                                                                                                                                                               |
| comments         | application/atom+xml              | Entry       | An Atom Feed for all comments on just this entry.                                                                                                                                                                                                                                           |
| comment          | ?                                 | Entry       | An Atom entry which is a comment on this entry. More useful when used with the "rev" attribute to indicate that this entry is a comment on some other entry.                                                                                                                                |
| versions         | application/atom+xml              | Entry       | An Atom feed of prior versions of this entry. Useful for wikis.                                                                                                                                                                                                                             |
| trackbacks       | application/atom+xml              | Entry       | An Atom feed of trackbacks to this entry. For those that want to keep their comments feeds clean.                                                                                                                                                                                           |
| alternate        | text/html, others                 | Entry       | Points to an alternate representation of this entry. Permalink of what this entry is about, for those that still use web browsers.                                                                                                                                                          |
| related          | text/html or application/atom+xml | Entry       | Point to related Web Pages or related Atom Entries (1)                                                                                                                                                                                                                                      |
| source           | any                               | Entry\|Feed | Points to the original source of the entry or feed, based on <a href="http://dublincore.org/documents/dces/" class="external"><img src="/moin-1.2.1/wiki/htdocs/classic/img/moin-www.png" width="11" height="11" alt="[WWW]" />DCES.source</a>                                              |
| via              | any                               | Entry       | Points to the "next" intermediary "source" of a link, comment, or discussion ultimately from or about the "source" link                                                                                                                                                                     |
| in-reply-to      | any                               | Entry       | Points to atom:entry this entry responds to. (see [PaceLinkParent](/wiki/pie/PaceLinkParent))                                                                                                                                                                                               |
| transform.input  | target type                       | Feed        | Points to an XSLT stylesheet - see [TransformLinkTag](/wiki/pie/TransformLinkTag)                                                                                                                                                                                                           |
| transform.output | target type                       | Feed        | Points to an XSLT stylesheet - see [TransformLinkTag](/wiki/pie/TransformLinkTag)                                                                                                                                                                                                           |
| icon             | image/\*                          | Feed        | Points to an icon for use for the site, typically 16x16 pixels - as per <a href="http://msdn.microsoft.com/workshop/Author/dhtml/howto/ShortcutIcon.asp" class="external"><img src="/moin-1.2.1/wiki/htdocs/classic/img/moin-www.png" width="11" height="11" alt="[WWW]" />IE favicons</a>. |
| logo             | image/\*                          | Feed        | Points to a logo for use for the site, typically 88x31 pixels - meant to be compatible with the &lt;image&gt; element in RSS 2.0                                                                                                                                                            |
| service.post     | application/atom+xml              | Feed        | Points to the PostURI for creating a new entry.                                                                                                                                                                                                                                             |
| service.post     | application/atom+xml              | Entry       | Points to the PostURI for creating comments on the entry.                                                                                                                                                                                                                                   |
| service.feed     | application/atom+xml              | Entry\|Feed | Points to the FeedURI for this site.                                                                                                                                                                                                                                                        |
| service.edit     | application/atom+xml              | Entry       | Points to the EditURI for this Entry.                                                                                                                                                                                                                                                       |

</div>

**Rel** - The value of the 'rel' attibute.

**Type** - The value of the 'type' attribute.

**Where** - Where the link tag appears in this Atom element.

Please add or change the values above as needed.

------------------------------------------------------------------------

The 'start' relationship with semantics of "Points to the Atom feed you
would subscribe to with an aggregator" is redundant, since the
&lt;feed&gt; element MUST have a &lt;link&gt; with 'alternate', which
has the same meaning.

Additionally, some spiderbots treat 'start' as meaning the place to
start crawling from, not the place to poll looking for updates. Perhaps
it would be better to use 'bookmark'?

------------------------------------------------------------------------

See also : [LinkElement](http://intertwingly.net/wiki/pie/LinkElement)


------------------------------------------------------------------------

[1](http://intertwingly.net/wiki/pie/LinksLog) Very cool for Spiders, necessary for
[LinksLog](http://intertwingly.net/wiki/pie/LinksLog)

#### Notes

[AnneVanKesteren](http://intertwingly.net/wiki/pie/AnneVanKesteren) It has been suggested
to replace 'alternate', currently being specified as the permalink for
the ENTRY, with 'bookmark', which seems semantically more appropriate.
'about' has been suggested as well, which is a link that points to a
URI, which is the subject of the post (needed for Link logs).

</div>

<div id="footer">

</div>
