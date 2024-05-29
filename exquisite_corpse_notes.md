# Exquisite corpse

## The Mission

> Your challenge will be to write crazy stories (in markdown) with your group in a game of exquisite corpse. All members of the team must create a repository called exercise-exquisite-corpse with a README.md which will contain the game itself.

> Each member of the team must create the repository, there will be four instance of the game, but the stories can/should be different.

### Instructions

#### Initialisation

[x] create the repository\
`https://github.com/LuanPM284/exquisite_corpse`

[x] initialize the README.md

[x] give a title to your story\
`## The story of the missing AI`

[x] clone the repository\
`git clone https://github.com/LuanPM284/exquisite_corpse`

[x] create a development branch\
`git checkout -b development`

[x] go to that branch\
`git checkout development`

[x] write 3 lines of text to begin the story (use as much 
Markdown as possible)

[x] commit/push the changes to the branch development\
` git push --set-upstream origin development`\
    same thing but shorted code\
`git push -u origin development`

[x] invite the other members of the group as contributors

#### Contributions

[x] check a repository where you have been invited

[x] clone said repository\
`git clone https://github.com/cartalano/exquisite_corpse.git`

[x] list the existing branches\
`git branch -a`

[x] go to the branch development\
`git checkout development`

[x] create a branch called your-name from there\
`git checkout -b Patrick`

[x] write 3 lines of text to begin the story (use as much Markdown as possible)

[x] commit the changes to the branch your-name\
`git add .`\
A good idea is to do a `git pull` to check if any new modifications were made\
`git commit -m "message"`\
[x] merge your branch with development\
`git checkout development`\
`git merge Patrick`\
[x] push the branch development\
`git push`\
[] do this for all members of the group
```bash
git pus cartalano
git push anthosaxe
git push fabricetchounkeu
git push KarlVand
git push Mus1shi
```


#### Versioning

[] go back to your repository when all your colleagues are done
[] merge development with the branch master
[] make a tag of master called version-1

#### Correction

[] create a new branch corrections from master
[] correct all misspellings (if there are none add the mention perfect)
[] commit/push
[] merge with master
[] go to the branch development
[] update the branch development by merging with corrections