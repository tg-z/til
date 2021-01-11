---
tags:
- terminal
---
# bash script conditions
> https://dev.to/zakiarsyad/bash-script-conditions-1ano

Basic usage of if statement in bash scripting

```sh
if [ CONDITION ]; then FIRST_COMMANDS
elif [ CONDITION ]; then SECOND_COMMANDS
else THRID_COMMANDS
fi
```

* Always use space between the brackets in the condition.
* Always terminate the line with `;` before adding a new keyword

 `if [ CONDITION ]; then`

* Use `!` to invert the condition

 `if [ ! CONDITION ]; then`

* Combine conditions using `-a` for AND, and `-o` for OR


There are three syntaxes for define the condition

# Single-Bracket

Support 3 types of conditions

## [](#filebased-condition)File-based condition
* `[ -a file ]` or `[ -e file ]` : if the file is exists
* `[ -d directory ]` : if the directory is exists and it's a directory
* `[ -r file ]` : if the file is exists and is readable to the script
* `[ -w file ]` : if the file is exists and is writeable to the script
* `[ -x file ]` : if the file is exists and is executable to the script
* `[ -s file ]` : if the file is exists and has a size of more than 0 bytes

* `[ file1 -ef file2]` : if the files refer to the same device/inode number

* `[ file1 -nt file2]` : if the file1 was changed more recently than file2, or if file1 exists and file2 doesn't

* `[ file1 -nt file2]` : if the file1 was changed longer ago than file2, or if file1 exists and exists

* `[ -N file ]` : if the file is exists and was modified after the last read

* `[ -g file ]` : if the file is exists and is a set-group-ID

* `[ -u file ]` : if the file is exists and is a set-user-ID

* `[ -G file ]` : if the file is exists and is owned by the effective group ID

* `[ -O file ]` : if the file is exists and is owned by the user executing the script

* `[ -b file ]` : if the file is exists and is a block special

* `[ -c file ]` : if the file is exists and is a character special

* `[ -f file ]` : if the file is exists and is a regular file

* `[ -h file ]` or `[ -L file ]` : if the file is exists and is a symbolic link

* `[ -k file ]` : if the file is exists and has its sticky bit set

* `[ -p file ]` : if the file is exists and is a named pipe

* `[ -S file ]` : if the file is exists and is a socket

* `[ -t file ]` : if the file descriptor is exists and refers to an open terminal


 ## [](#stringbased-condition)String-based condition
* `[ STRING1 == STRING2 ]` : if equal
* `[ STRING1 != STRING2 ]` : if not equal
* `[ -n STRING ]` : if has length of more than zero
* `[ -z STRING ]` : if an empty string
* `[ STRING =~ PATTERN ]` : if match the regex pattern

## [](#arithmetic-condition)Arithmetic condition
* `[ NUM1 -eq NUM2 ]` : if equal
* `[ NUM1 -ne NUM2 ]` : if not equal
* `[ NUM1 -gt NUM2 ]` : if greater than
* `[ NUM1 -ge NUM2 ]` : if greater than equal
* `[ NUM1 -lt NUM2 ]` : if less than
* `[ NUM1 -le NUM2 ]` : if less than equal

# Double-bracket

This is the enhanced version of single-bracket. All features in single-bracket syntax are compatible here. We can start using this syntax.

The differences :

* Can use regex

 `[[ STRING =~ PATTERN ]]` : if match the regex pattern

* Can use `&&` and `||` instead of `-a` and `-o`

# Double-parenthesis

This is another syntax for arithmetic condition

* `(( NUM1 == NUM2 ))` : if equal
* `(( NUM1 != NUM2 ))` : if not equal
* `(( NUM1 > NUM2 ))` : if grater than
* `(( NUM1 >= NUM2 ))` : if grater than equal
* `(( NUM1 < NUM2 ))` : if less than
* `(( NUM1 <= NUM2 ))` : if less than equal

We also can quickly test a condition like this

```sh
# using &&
[ $foo == "bar" ] && echo true

# using ||
[ $foo == "bar" ] || echo true
```
