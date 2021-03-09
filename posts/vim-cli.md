# vim cli
https://vim.help/

> using vim on the commandline

install vim-plugins + quit vim when done:
```sh
vim -c "PlugInstall" -c "qa"
```

update vim-plugins + quit vim when done:
```sh
vim -c "PlugUpdate" -c "qa"
```

do something without loading vimrc:
```sh
vim -es -u vimrc -i NONE -c "help"
```

<div class="tags">
<p>tags: <a href="../tags.html#vim">#vim</a>, <a href="../tags.html#terminal">#terminal</a></p>
</div>

<div class="tags" align="center">
<a href="../index.html">⭠</a>
</div>