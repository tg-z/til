# replacing words in vim
https://vim.help/12-clever-tricks#12.7

> By combining several commands you can make Vim do nearly everything. In this chapter a number of useful combinations will be presented. This uses the commands introduced in the previous chapters and a few more.

## Clever tricks
### Replace a word

The substitute command can be used to replace all occurrences of a word with another word:

    :%s/four/4/g

The `%` range means to replace in all lines. The `g` flag at the end causes all words in a line to be replaced.

This will not do the right thing if your file also contains `thirtyfour`. It would be replaced with `thirty4`. To avoid this, use the `\<` item to match the start of a word:

    :%s/\<four/4/g

Obviously, this still goes wrong on `fourteen`. Use `\>` to match the end of a word:

    :%s/\<four\>/4/g

If you are programming, you might want to replace `four` in comments, but not in the code. Since this is difficult to specify, add the `c` flag to have the substitute command prompt you for each replacement:

    :%s/\\<four\\>/4/gc

### Replacing in several files

Suppose you want to replace a word in more than one file. You could edit each file and type the command manually. It's a lot faster to use record and playback.

Let's assume you have a directory with C++ files, all ending in `.cpp`. There is a function called `GetResp` that you want to rename to `GetAnswer`.

    vim \*.cpp

Start Vim, defining the argument list to contain all the C++ files. You are now in the first file.

`qq`

Start recording into the q register

`:%s/\<GetResp\>/GetAnswer/g`

Do the replacements in the first file.

`:wnext`

Write this file and move to the next one.

`q`

Stop recording.

`@q`

Execute the q register. This will replay the substitution and `:wnext`. You can verify that this doesn't produce an error message.

`999@q`

Execute the q register on the remaining files.

At the last file you will get an error message, because `:wnext` cannot move to the next file. This stops the execution, and everything is done.

When playing back a recorded sequence, an error stops the execution. Therefore, make sure you don't get an error message when recording.

There is one catch: If one of the .cpp files does not contain the word `GetResp`, you will get an error and replacing will stop. To avoid this, add the `e` flag to the substitute command:

`:%s/\<GetResp\>/GetAnswer/ge`

The `e` flag tells `:substitute` that not finding a match is not an error.
