#### change global default branch to main
`git config --global init.defaultBranch main`

#### to update each git repo
`git branch -m master main`
`git push origin :master main`
`git branch --set-upstream-to=origin/main main`
