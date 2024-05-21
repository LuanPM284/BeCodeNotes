# BeCode Notes
## Git
 
Initiate terminal on folder to git
command:
```bash
## Basics 
git init
# this will initialise a git repository on local, git must be installed on computer. If linux or mac it should be the case, a `git --version`on a terminal will show
git status
# this allows to see the current status of the files inside
git log --oneline
# see all the commits and branches that were worked on
git branch -a
# shows all branches on local and remote, allows to see where the selector is

## Working with remote and connecting with online git repositories 

git remote add origin main https://tokenhere@github.com/user_name/repo_name.git
# if token used instead

git push -u origin main
# this will push(put inside) or computer files onto the github repository, if all is connected, else it will ask for credentials

code file_name
# this allows us to open files on visual studio

vim file_name
# allows to edit the file on a vim interface,inside the console

git clone git@github.com:username/repo.git
# this allows us to clone a repository on my machine

git clone URL from github
# this will allow me to have all the necessary files, but not to send back since it's reading only
```

## From learning git
```bash
### Basic branching and moving
git commit
# creates a copy of the opened file

git checkout
# allows us to focus un a place we already have something, being the main or a branch, it shows a * when we are there

git branch branch_name
# it's a specialized commit that doesn't get saved if not asked
git checkout 

git checkout branch_name
# this will check the branches
# git switch branch_name

git merge branch_name
# here the main must be the focus in order to merge the branch

git rebase main
# rebase allows us to follow up directly from the main, like copying the copies together, allow to group together selctors

## Some syntax for movement on GIT
# HEAD : working on top of it doesn't move with the main or branches it can separate or be in the same
# ^ : moves up a commit
#     moves the head up once or ^^ twice or ^^^ thrice etc... going to parent, grandparent...

# ~number : moves a number of times
#     moves the number asked, instead of doing ^^^ we can do ~3

# -f : will force a move: git branch -f command

git branch -f main HEAD^
# this will allow us to go up a path and branch the passed ones, knowing the head is with main

git log
# allows us to see what is happening

git branch -f main HEAD
# this allows us to move the main or any other selector to HEAD, specially useful if branch already exists

git reset
# goes back one node of  tree

git revert
# created a new node where changes can are in

git cherry-pick <commit1><commit2>...
# this allow us to pick the commits we want and paste them under main, so as to not do one by one

git rebase -i HEAD~4
# this will pick up all before commits in the branch and present us an interface where we can choose which ones to pick and the order

git commit --amend
# add modifications

git tag <tag name > <commit>
# adds tag v1 to commit C1 if tag is v1

git describe <ref>

# allow us to see the closest tag and the hash corresponding to it's commit
# <tag>_<numCommits>_g<hash> 
# Where tag is the closest ancestor tag in history, numCommits is how many commits away that tag is, and <hash> is the hash of the commit being described.

git checkout HEAD~^2~2
# this allows us to move up a branch, or tree,  specifying where to go up parent 1 and grandparent 2

### Working remote with git

git clone
# this clones out branches, and is in the format o/main with o being the original and main the main of the original

git fetch 
# it allows us to download commmits from a source and add them to our work, this is done after a clone is created

git pull
# it's a fetch with a merge, allowing us to work with an ready up to date file

git fakeTeamwork
# this "commits" on the remote or main branche, allows us to pretend a modification was made

git fakeTeamwork foo 3
# this will fake a work that we will commit called foo and will repeat 3 times

git push
# allows me to send my work to the team, github, online; from the local, o/main goes back to main
# o/main follows the main from the remote, if ir moves down a branch it will do so if the original was modified and new commits by others were pushed yours won't be accepted and nothing happens we could see it as you working an older version
# to solve the problem of already having a new version when I finish work I can follow:

git fetch
# fetchs the new version
git rebase o/main
# adds that to mine, older
git push
# pushes all to remote

# same idea with merge:

git fetch
git merge o/main
# this shows us the versions at the same time instead of on a series
git push

# we have shortcuts for this:

git pull --rebase
git push

# I can add features or other branches and send them to remote when I can't push to the main directory
# by creating a branch feature on my local and than doing a push on that, a copy called o/feature will be created showing me it's placement on the remote tree

git pull --rebase
git push

### Remote tracking

git checkout -b totallyNotMain o/main
# When doing a push o/main is not necessarily following the main, we can specify where to send the new data

git branch -u o/main foo    
# will set foo to track o/main

git branch -u o/main
# If foo is currently checked out you can even leave it off:

# Push Arguments
git push <remote> <place>
git push origin main
# translation of code:
# Go to the branch named "main" in my repository, grab all the commits, and then go to the branch "main" on the remote named "origin". Place whatever commits are missing on that branch and then tell me when you're done
# origin is the place where the main usually is on the remote file, we can sent several branches there by using origin code

# Place Arguments
git push origin <source>:<destination>
# a new branch will be created at destination if does not exist to recieve new code 
# I want to put my destination parameter where my source parameter is

git fetch origin foo

# The <place> parameter
# If you specify a place with git fetch like in the following command:

git fetch origin foo
git fetch origin <source>:<destination>
#     Git will go to the foo branch on the remote, grab all the commits that aren't present locally, and then plop them down onto the o/foo branch locally.
# We an see it as the oposite of pull where we the source is remote and destination is localtake from remote and put on local where my selector is, being HEAD or not it's important to remember to fetch on commits in order to avoid moving the o/main or o/foo this will allow to fetch more specific branche Source abuse
git push origin:foo
# we can delete a branch by pushing for nothing, empty
git fetch origin:bar
# creates a new branch called bar, since we ask nothing from remote to something local, the local is created

# Pull arguments
# Here are some equivalent commands in git:

git pull origin foo
# is equal to:
git fetch origin foo 
git merge o/foo

# And...

git pull origin bar:bugFix
# is equal to:
git fetch origin bar:bugFix
git merge bugFix
```
## Video for Git tutorial
https://youtu.be/3RjQznt-8kE

### Git & GitHub Tutorial for Beginners #1 - Why Use Git?
allow different versions of files
collaboration

### Git & GitHub Tutorial for Beginners #2 - Installing Git
intalling git by the website
cmder a command line for windows: https://cmder.app/
```bash
git --version
git config --global user.name user_name
git config --global user.email user_email
git config user.name
```
creating a file on a directory

### Git & GitHub Tutorial for Beginners #3 - How Git Works
repos or repository a project folders using .git file inside
commit are like savepoints, it creates a history of changes on files
we are able to move fowards or backwards on the commits
stages:
- modified, changed files; created/touch
- staging, add them to commit; add
- commited, inside commit; commit

### Git & GitHub Tutorial for Beginners #4 - Creating a Repository
start a git repository and saving changes
```bash
git init
```
### Git & GitHub Tutorial for Beginners #5 - Staging files
show what files have been modified, staging area
if red it's not added to the future commit
if green it's added
```bash
git status
git add file_name
```
the terminal gives us the option to take out the file from add
```bash
git rm --cached file_name
git restore --staged file_name
```
it wil gives us back the red file when status
```bash
git add .
```
add all files to staging area, or cache

### Git & GitHub Tutorial for Beginners #6 - Making Commits
```bash
git commit -m "message about change"
```
-m is a flag allowing the comment to be passed down the commit
if i modify a file by vim file I get back to staging part where it-s red on status
I need to do add in order to commit
Modified the styles.css
now have 3 commits, 3 snapshots
show all commits made

```bash
git log
git log --oneline
```

this will allow to see all packet and with shortcuts for commits

### Git & GitHub Tutorial for Beginners #7 - Undoing Things
different ways to go back to a commit:
- checkout commit_id, safe, just move
- revert commit_id, safeish, cache
- reset commit_id, not safe, permanent

```bash
git checkout commit_id
git checkout main
git checkout master
``` 
depending on what your git does, linux does master as of today we tend to do main
the changes would be visible if I have a text editor open with the file for exemple vs code or other

with vim i can do :e to reload file
with git revert it show me a editor showing the changes that will happen I can just save and leave in order to accept
it will create a new commit that will revert whatever modification we did on the reverted commit, it doesn't remove the original commit. it's like le complement

the git reset will erase the commits after the one we choose but the modifications still exist on our editor; we can commit again

if we want to trully erase all other commits untill the chosen point we do\
```bash
git reset commit_id --hard
```

### Git & GitHub Tutorial for Beginners #8 - Branches
Master branch or main branch\
Allow us to create features on an isolated environement
```bash
git branch name-branch
git branch -a shows all branches, with * on the actual one
git checkout branch_name
```
We can add new files, using status to check and than add and commit\
The new feature is isolated from main
delete a branch, go back to main and do
```bash
git branch -d feature1
# if not merged, asked to confirm do
git branch -D feature1
# in order to create a branch and checkout we do:
git checkout -b branch_name
```
Now we create two different branches feature1 and feature 2:

```bash
git checkout -b feature1
touch feature1.js
vim feature1.js
git add .
git commit -m "message feature1"

git checkout -b feature2
touch feature2.js
vim feature2.js
git add .
git commit -m "message feature2"

```

### Git & GitHub Tutorial for Beginners #9 - Merging Branches (& conflicts)
we need to go back to master branch in order to merge to it
```bash
git checkout master
git merge feature
```

let's create a new branch to simulate a conflit
```bash
git checkout -b feature3
```
Now imagine someone decided to edit the master branch
```bash
vim styles.css
# modified it added and commited
git checkout feature3
vim styles.css
# modified differently added and commited
git checkout master
git merge feature3
```
we get a conflit error message and it shows on my original file, I can open it with vim I get this:
```css
this is styles change
body {
font: comic-sans;
<<<<<<< head
color:blue;
=======
color:green;
>>>>>>> feature3
}
```
it was blue on master and I merged green on feature
I can modify directly on the file to decide what to do
than we add and just do a git commit and save to accept changes
we can confirm by doing git log --oneline

### Git & GitHub Tutorial for Beginners #10 - Introduction to GitHub
get a github account and create a repository
get the url for the repos: https://github.com/LuanPM284/mdChallengeTest.git
```bash
git status
# if all good, follow the rest
git push repos_url branch_name
# it should go to GitHub if the terminal accepts the authentication
git push https://github.com/LuanPM284/git-train.git master
# this works! even if master doesn't exists it creates one, it replaced main
```
we can create an alias in this repository in place of always specifying the url
```bash
git remote add origin https://github.com/LuanPM284/git-train.git
# this is creating origin as an alias for the repository, a convention
# I got an error so I did this
git push --set-upstream origin master
# in order to clone a repository from github I do:

# clone code from github
git clone https://github.com/LuanPM284/NEW-REPO.git
# this should give us all files from the repo
cd NEW-REPO
# enter the new directory
# create a new file
touch index.html
```
modify it and add and commit
because it's a clone we don't need to specify a remote alias, to show our repository we do:
```bash
git remote -v
# it show us the possible push and fetch repos available
git push origin master
push master branch to origin # or our repos
```

### Git & GitHub Tutorial for Beginners #11 - Collaborating on GitHub
start by pulling localy all available files from master branch on the origin repos\
`git pull origin master`\
create a new branch in order to work on a new feature\
`git checkout -b new-branch`\
now I can edit and work on it once done, add and commit
instead of pushing to the main branch and mess up all work I will push to a new branch that can be reviewed and maybe later merged

`git push origin new-branch`\
this will appear on github as a new branch

After that is a review from others and a lot o buttons push to confirm the merge, nice!

Everytime I start a new modification I should pull the main branch and check if anything was cahnged\
`git pull origin master`\
here is master but it could be main
Star a new branch in order to keep track of work

### Git & GitHub Tutorial for Beginners #12 - Forking (& Contributing)
forking is making a clone of someone elses repo to yours in order to work on it, since it isn't always possible to push your files\
Go to github and copy the fork link
`git clone link`\
we can create a directory to put fiels on
add and commit
push to origin

on github, the others page, make pull request
this will allow the owner to see your additions but not merge since that is only available to the original creator
