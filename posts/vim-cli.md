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
