## STEPS + CODE
1. Create a new folder called BECODE-TRAINING-<Your-Name-Your-Last-Name>(use your terminal!!! I'll know if you don't).
```bash
pwd
ls -al
cd folderWhereSavingWork
mkdir newFolder
```

2. Push your empty folder to your github with the commit message Setup Of my Github Folder.
```bash
git init
touch .gitkeep
# touch .gitignore
git add .
push add remote origin https://github.com/USER-NAME/REPOS-NAME.git
git commit -m "empty file"
git push --set-upstream origin main
git push origin
```
3. On your local machine, at the root of the BECODE-TRAINING-*** folder, add your first Markdown Page you created last Friday.
```bash
touch LearningMD_Becode.md
```
4. Rename your first markdown page from My-First-Markdown-Page.md to README.md.
```bash
vim LearningMD_Becode.md
## inside vim
# :!mv LearningMD_Becode.md README.md ; to modify the name and replace original
# :qa!
# :!cp LearningMD_Becode.md README.md ; to modify the name and make a copy
```
5. At the root of the BECODE-TRAINING-*** folder Create a new folder called Theory.
```bash
cd ~/newFolder
mkdir Theory
```
6. Push your modifications to GitHub with the commit message Ready to work on my theory files.
```bash
git add.
git commit -m "Ready to work on my theory files"
git push
```
7. Using your terminal, create a git Branch called theory.
```bash
git branch theory
```
8. Switch to that branch.
```bash
git checkout theory
```
9. Create a file called how-does-the-internet-works.md inside the theory folder.
```bash
cd Theory
touch how-does-the-internet-works.md
```
10. On this file use all the markdown syntax you can to summarize the video linked in the intro of the challenge.
```bash
vim how-does-the-internet-works.md
## inside vim
# :wq to save and exit
```
11. Push all your work on your branch with the commit message first theory update.
```bash
git add .
git commit -m "first theory update"
git push
```
12. Go on GitHub and merge your branch with the main branch.
```bash
# Inside github push conflit and pull requests and merge
```
13. Find A partner that has finnished the twelve first steps and clone his/hers/their repository.

```bash
# This needs a fork from the others repos
# Clone to my machine
# Modify
# Send back and wait for conflits and merge
# Here we have two options
## Direct Collab
# - Go to your repos on GitHub at Settings click Collaboration and add others this will allow others to directly push branches on your repos and to conflit and merge

## Indirect Collab
# - Here you will need to create a fork by using Github and going to the repos that you want to worl on. A clone will be added to your own repos,from there you can create a clone to your machine and work on it.
# - From here you can create a branch and push to the fork, it will appear on the original repos with the option for the owner to solve conflits and merge 

```

14. Create a branch called review
```bash
git branch review
```
15. On this branch review the content of the how-does-the-internet-works.md file and update it. if you see any mistake, fix them.
```bash
git checkout review
vim how-does-the-internet-works.md

```
16. Mistakes or not, you should add at the end of the file the sentence this theory file has been reviewed by <Your Name>
```bash
vim how-does-the-internet-works.md
## inside vim
# this theory file has been reviewed by Patrick
# :wq
git add .
git commit -m "reviewed theory file "
git add remote origin forked_repos
git push origin
```
17. Your partner should do the same to your Repo.
```bash
# Same for partner, I recieve his version and resolve conflits before merging
```
18. Go on GitHub and merge your partner's review on your work.
I can add colaborators by going on settings of my repos and adding their github id
Once I have the branch I can create a pull request and merge if all is right.
```bash
# This is done by the one who recieves the files
```
19. Take a break you did good work :)\
[x] All done\
[ ] Took Break\
[x] human.exe stop working