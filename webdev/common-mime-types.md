# Common MIME types

> Here is a list of MIME types, associated by type of documents, ordered by their common extensions.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

Two primary MIME types are important for the role of default types:

*   `text/plain` is the default value for textual files. A textual file should be human-readable and must not contain binary data.
*   `application/octet-stream` is the default value for all other cases. An unknown file type should use this type. Browsers pay a particular care when manipulating these files, attempting to safeguard the user to prevent dangerous behaviors.

IANA is the official registry of MIME media types and maintains a [list of all the official MIME types](http://www.iana.org/assignments/media-types/media-types.xhtml). This table lists some important MIME types for the Web:


|Extension|Kind of document|MIME Type|
|---|---|---|
|.aac|AAC audio|audio/aac|
|.abw|AbiWord document|application/x-abiword|
|.arc|Archive document (multiple files embedded)|application/x-freearc|
|.avi|AVI: Audio Video Interleave|video/x-msvideo|
|.azw|Amazon Kindle eBook format|application/vnd.amazon.ebook|
|.bin|Any kind of binary data|application/octet-stream|
|.bmp|Windows OS/2 Bitmap Graphics|image/bmp|
|.bz|BZip archive|application/x-bzip|
|.bz2|BZip2 archive|application/x-bzip2|
|.csh|C-Shell script|application/x-csh|
|.css|Cascading Style Sheets (CSS)|text/css|
|.csv|Comma-separated values (CSV)|text/csv|
|.doc|Microsoft Word|application/msword|
|.docx|Microsoft Word (OpenXML)|application/vnd.openxmlformats-officedocument.wordprocessingml.document|
|.eot|MS Embedded OpenType fonts|application/vnd.ms-fontobject|
|.epub|Electronic publication (EPUB)|application/epub+zip|
|.gz|GZip Compressed Archive|application/gzip|
|.gif|Graphics Interchange Format (GIF)|image/gif|
|.htm
    .html|HyperText Markup Language (HTML)|text/html|
|.ico|Icon format|image/vnd.microsoft.icon|
|.ics|iCalendar format|text/calendar|
|.jar|Java Archive (JAR)|application/java-archive|
|.jpeg
    .jpg|JPEG images|image/jpeg|
|.js|JavaScript|
    text/javascript, per the following specifications: [1](https://html.spec.whatwg.org/multipage/#scriptingLanguages) [2](https://html.spec.whatwg.org/multipage/#dependencies:willful-violation) [3](https://datatracker.ietf.org/doc/draft-ietf-dispatch-javascript-mjs/) |
| .json   | JSON format    | application/json    |
| .jsonld | JSON-LD format | application/ld+json |
|.mid
    .midi|Musical Instrument Digital Interface (MIDI)|audio/midi audio/x-midi|
|.mjs|JavaScript module|text/javascript|
|.mp3|MP3 audio|audio/mpeg|
|.mpeg|MPEG Video|video/mpeg|
|.mpkg|Apple Installer Package|application/vnd.apple.installer+xml|
|.odp|OpenDocument presentation document|application/vnd.oasis.opendocument.presentation|
|.ods|OpenDocument spreadsheet document|application/vnd.oasis.opendocument.spreadsheet|
|.odt|OpenDocument text document|application/vnd.oasis.opendocument.text|
|.oga|OGG audio|audio/ogg|
|.ogv|OGG video|video/ogg|
|.ogx|OGG|application/ogg|
|.opus|Opus audio|audio/opus|
|.otf|OpenType font|font/otf|
|.png|Portable Network Graphics|image/png|
|.pdf|Adobe Portable Document Format (PDF)|application/pdf|
|.php|Hypertext Preprocessor (Personal Home Page)|application/x-httpd-php|
|.ppt|Microsoft PowerPoint|application/vnd.ms-powerpoint|
|.pptx|Microsoft PowerPoint (OpenXML)|application/vnd.openxmlformats-officedocument.presentationml.presentation|
|.rar|RAR archive|application/vnd.rar|
|.rtf|Rich Text Format (RTF)|application/rtf|
|.sh|Bourne shell script|application/x-sh|
|.svg|Scalable Vector Graphics (SVG)|image/svg+xml|
|.swf|Small web format (SWF) or Adobe Flash document|application/x-shockwave-flash|
|.tar|Tape Archive (TAR)|application/x-tar|
|.tif
    .tiff|Tagged Image File Format (TIFF)|image/tiff|
|.ts|MPEG transport stream|video/mp2t|
|.ttf|TrueType Font|font/ttf|
|.txt|Text, (generally ASCII or ISO 8859-n)|text/plain|
|.vsd|Microsoft Visio|application/vnd.visio|
|.wav|Waveform Audio Format|audio/wav|
|.weba|WEBM audio|audio/webm|
|.webm|WEBM video|video/webm|
|.webp|WEBP image|image/webp|
|.woff|Web Open Font Format (WOFF)|font/woff|
|.woff2|Web Open Font Format (WOFF)|font/woff2|
|.xhtml|XHTML|application/xhtml+xml|
|.xls|Microsoft Excel|application/vnd.ms-excel|
|.xlsx|Microsoft Excel (OpenXML)|application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|
|.xml|XML|application/xml if not readable from casual users (RFC 3023, section 3)
    text/xml if readable from casual users (RFC 3023, section 3)|
|.xul|XUL|application/vnd.mozilla.xul+xml|
|.zip|ZIP archive|application/zip|
|.3gp|3GPP audio/video container|video/3gpp
    audio/3gpp if it doesn't contain video|
|.3g2|3GPP2 audio/video container|video/3gpp2
    audio/3gpp2 if it doesn't contain video|
| .7z | 7-zip archive | application/x-7z-compressed |


