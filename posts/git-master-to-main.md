# git rename branch `master` to `main`

change global default branch to `main`:
```bash
# from now on everytime `git init` is run, the default branch is what's configured
git config --global init.defaultBranch <new-default-branch-name>
# make default branch main
git config --global init.defaultBranch main
```

change repository branch name:
```bash
# rename branch
git branch -m master main
# updates branch for push
git push origin :master main
# allows for pushing changes to remote
git branch --set-upstream-to=origin/main main
```

<div class="tags">
<p>tags: <a href="../tags.html#webdev">#webdev</a></p>
</div>
