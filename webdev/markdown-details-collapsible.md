# A collapsible section containing markdown
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

# A collapsible section containing code
<details>
  <summary>Click to expand!</summary>
  
  ```javascript
    function whatIsLove() {
      console.log('Baby Don't hurt me. Don't hurt me');
      return 'No more';
    }
  ```
</details>

# How to structure
```
# A collapsible section with markdown
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>
```

<details>
<summary>:heart: thx</summary>

![ty](https://camo.githubusercontent.com/4fd95715cff5db944532897c286e526780e90660/68747470733a2f2f6d65646961332e67697068792e636f6d2f6d656469612f53396f4e4743314534325654324a527973762f67697068792e676966)
</details>

<details>
    <summary>a <code>bash</code>oneliner: </summary>
    ```bash
    #!/bin/sh 
    curl https://www.mankier.com/api/v2/mans/?q="$1"
    ```
    </details>
for using a collapse-able list-item:
- example 1
- example 2
- <details><summary>zsh - easy (click to expand)</summary>

  ```zsh
  #!/bin/zsh
  local d="$(date +"%T-%m-%d-%y)"
  curl -sH "Accept: application/vnd.github.v3.star+json" "https://api.github.com/users/tg-z/starred" |\ jq '.' > ~/logs/$d.json
  ```
  `note the newlines and indents`
</details>

- example 4

**NB:** Make sure you have an **empty line** after the closing `</summary>` tag, otherwise the markdown/code blocks won't show correctly.

**NB**: Make sure you have an **empty line** after the closing `</details>` tag if you have multiple collapsible sections.
