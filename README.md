<h2 align="center">
  <img src="https://github.com/fwd/n2/raw/master/.github/banner.png" alt="Prompts" width="500" />
</p>

<h2 align="center">Free Hosted Docs (w/ Github Pages)</h2>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Install

```bash
git clone git@github.com:fwd/docs.git && cd docs
```

## ❯ Dev

Serve ```/index.html``` with any language. For ease, PHP does the trick.

```bash
php -S localhost:8080
```

## ❯ Edit

- [config.json](/config.json) - Basic settings.
- [source](/source) - Pages in [Markdown](https://www.markdownguide.org/cheat-sheet/#basic-syntax).

You don't have to touch any other file. Unless you want to.

## ❯ Deploy

To deploy, just remove this repo and add your own. 

```
rm -rf .git
git init
git add . && git commit -m "Look Ma! I'm on Github."
git branch -M "master"
git remote add origin git@github.com:NAME/REPO.git
git push -u origin "master"
```

## ❯ Free Public Hosting

- Repo must be Public.
- Visit your Repo's [Settings](/../../settings/pages) Page
- Source --> "Master" --> "/Root" --> **\[ Save \]**

#### Optional: Use Custom Domain:

- Visit your Repo's [Settings](/../../settings/pages) Page
- "Custom domain" --> "Add Domain" --> **\[ Save \]**

## ❯ Private Hosting

> If you want to keep Docs private. That's fine. Make sure Repo is private. Bring your own server to host ```/index.html``` and the rest of the files. 

## ✅ Done

You now have free, reliable hosting for your docs. 

Visit: https://NAME.github.io/REPO

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Contributing

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome at [issues page](https://github.com/fwd/n2/issues).

## ❯ License

MIT License

Copyright © 2022 [@nano2dev](https://twitter.com/nano2dev).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## ❯ Stargazers

[![Stargazers over time](https://starchart.cc/fwd/docs.svg)](https://github.com/fwd/docs)
