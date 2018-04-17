# MLH/mlh-hackathon-boilerplate

This is a hackathon boilerplate created by [Major League Hacking][mlh-github]. Using [Jekyll][jekyll], it has a extensible [configuration][config] that covers basic event information. You can then fork the website and have it hosted free through [GitHub Pages][github-pages]. It's free to use.

Advantages:

- Built in support for [MyMLH][my-mlh]
- Community-owned and maintained
- Free hosting through [GitHub Pages][github-pages]
- Discoverable through Google Search, Twitter and Facebook

[mlh-github]: https://github.com/MLH
[jekyll]: https://jekyllrb.com
[config]: _config.yml
[github-pages]: https://pages.github.com
[my-mlh]: https://my.mlh.io


## Contributing

Fork this repo, clone the forked repo to your local machine

`git clone https://github.com/[your-github-username]/PlattsHacks.github.io`

Set up an upstream branch for your working directory. Create a new branch and start working on your task:

```
git remote add upstream https://github.com/PlattsHacks/PlattsHacks.github.io
git branch [name-of-your-new-branch]
git checkout [name-of-your-new-branch]
```

Now you can start working on it. Save your work by committing to the new branch:

```
git add .
git commit -m "your commit message"
git push origin [your-branch-name]
```

NOTE: Every time you start working, you will need to check out to master branch, check if there is any update from the **main repository**, fetch it and go back to the your current working branch.

```
git checkout master
git fetch upstream
git merge upstream/master
git checkout [your-working-branch]
```

When you are ready, you can create a pull request for a review.

Take a look at [this](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) to set up Ruby and run the Jekyll server on the local machine.
