# Intro do HTML and CSS

## Using GitHub Pages
<!-- in order to create my own developer landing page -->
> Source: https://dev.to/flexdinesh/create-your-developer-landing-page-with-github-pages---42jk

### How to do it with a github account
```
But with GitHub Pages, publishing your site is as easy as drinking a coffee.

- You need a GitHub account (you obviously have one already)
- Create a new repo with the name {username}.github.io
- Clone the repo and create an index.html file
- Add some content and git push
- Voila! Your site should be live at https://{username}.github.io in seconds.
```
For my case it will be: https://LuanPM284.github.io

### Setup the files
Go to the desired location and create a directory, initiate a git and add the index.html file.
```
pwd
ls -al
cd
mkdir dev_landing_page
git init
touch index.html
```
Next we need to add the file to stage, and commit in order to send back to my repository.
```
git add .
git commit -m "my index page"
```
And push it to the github repository.
```
git remote add origin https://github.com/LuanPM284/LuanPM284.github.io.git
git branch -M main
git push -u origin main
```
**Do not forget to add and commit any changes before pushing, else nothing will be sent.**
```
git add.
git commit -m "modifications"
git push
```
I cloned the original repository so I could have access to the CSS folder, I copied to my own folder later. Deleting the rest.
```bash
git clone https://github.com/flexdinesh/dev-landing-page.git
ls
cd dev-landing-page
cp -r css D:/Code/BeCode/dev_landing_page
cd ..
rm dev-landing-page
```
add/commit/push


