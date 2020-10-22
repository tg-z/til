# git rename branch `master` to `main`

change global default branch to `main`
```bash
# from now on everytime `git init` is run, the default branch is what's configured
$ git config --global init.defaultBranch <new-default-branch-name>
$ git config --global init.defaultBranch main
```

change repository branch name
```bash
$ git branch -m master main # renames branch
$ git push origin :master main # updates branch for push
$ git branch --set-upstream-to=origin/main main # allows for pushing changes to remote
```
