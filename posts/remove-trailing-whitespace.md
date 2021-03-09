# removing trailing whitespaces in vim
https://vim.help/12-clever-tricks#12.7

> By combining several commands you can make Vim do nearly everything. In this chapter a number of useful combinations will be presented. This uses the commands introduced in the previous chapters and a few more.

## Clever tricks
Trim blanks
---

Some people find spaces and tabs at the end of a line useless, wasteful, and ugly. To remove whitespace at the end of every line, execute the following command:

`:%s/\s\+$//`

The line range `%` is used, thus this works on the whole file. The pattern that the `:substitute` command matches with is `\s\+$`. This finds white space characters (\\s), 1 or more of them (\\+), before the end-of-line ($). Later will be explained how you write patterns like this, see “[Search commands and patterns](https://vim.help/27-search-commands-and-patterns)”.

The `to` part of the substitute command is empty: `//`. Thus it replaces with nothing, effectively deleting the matched white space.

Another wasteful use of spaces is placing them before a tab. Often these can be deleted without changing the amount of white space. But not always! Therefore, you can best do this manually. Use this search command:

`/`

You cannot see it, but there is a space before a tab in this command. Thus it's `/<Space><Tab>`. Now use `x` to delete the space and check that the amount of white space doesn't change. You might have to insert a tab if it does change. Type `n` to find the next match. Repeat this until no more matches can be found.
