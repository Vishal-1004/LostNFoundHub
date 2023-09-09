## Procedure to follow while working with this respository

`Step 1: `
Make a clone of this repository in your local device. In order to do so copy the HTTP link given under the code button dropdown and then in a specific folder in your PC open its git bash terminal, then enter the following command.
```
git clone http://.......
```
Now one thing to keep in mind is that don't make any direct changes to the main branch.

`Step 2: `
Instead make a new branch of your own to work on. This branch name should contain your name as well as the purpose for which you have made this branch. i.e
```
git branch vishalLiteratureReview
```

`Step 3: `
You can switch to this branch by entering the following command in git bash.
```
git checkout vishalLiteratureReview
```

`Step 4: `
Once you have switched to your created branch. Start working on the task which you where assigned.

`Step 5: `
When you are done with your work then we are suppose to stage this work and commit it. Use the following git bash commands to do so.

```
git add -A
git commit -m "Give a proper title which discribes your work"
```

`Step 6: `
Next step is to push this changes in the github repository for which you are suppose to enter the following commands after switching back to the main branch.
```
git push origin vishalLiteratureReview
```

`Step 7: `
Now go to your github repository and generate a pull request and wait your repuest to get merged with the main branch by the lead.
Once your changes are merged you have to delete your specific branch so that it do not creates any confusion while we proceed.

`Step 8: `
#### Note: 
When ever you start working on your local folder in which you have cloned the respective respository then you must always enter the following command.
```
git pull
```
This command will pull in all the changes which the other contributers have made and will load all the changes in your folder that is its a process to update your local folder, so that you can work on the up-to-date files/folders.
