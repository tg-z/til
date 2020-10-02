## using pyunfurl
pyunfurl creates an embed for your site when you pass it a url.
```
>>> pyunfurl.unfurl('https://twitter.com/hasanthehun/status/1284547799862792199?s=20')
```
in order to get html to embed, you must do: 
```
>>> pyunfurl.unfurl('https://twitter.com/hasanthehun/status/1284547799862792199?s=20')['html']
```

