![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h2 align="center" style="font-size: 30px">Free Hosted Docs (w/ Github Pages)</h2>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Install

```bash
git clone git@github.com:fwd/docs.git && cd docs
```

## ❯ Create

Serve ```/index.html``` with any language. For ease, PHP does the trick.

```bash
php -S localhost:8080
```

or run:

```
npm start
```

### File Structure

This package requires **no** compiling or installing. There are some optional scripts in ```package.json```

- [config.json](/config.json) - Configure Documentation.
- [/pages](/pages) - Pages in [Markdown](https://www.markdownguide.org/cheat-sheet/#basic-syntax).
- [custom.css](/custom.css) - Optional Custom CSS.
- [favicon.png](/favicon.png) - Customize Favicon.
- [/images](/images) - Store Documentation Assets

## ❯ Deploy

Simply remove the .git folder, and add your own. 

```
rm -rf .git
git init
git add . && git commit -m "Look Ma! I'm on Github."
git branch -M "master"
git remote add origin git@github.com:NAME/REPO.git
git push -u origin "master"
```

## ❯ Free Website Hosting

- Repo must be Public.
- Visit your Repo's [Settings](/../../settings/pages) Page
- Source --> "Master" --> "/Root" --> **\[ Save \]**

Website: https://NAME.github.io/REPO

#### Optional: Custom Domain:

- Visit your Repo's [Settings](/../../settings/pages) Page
- "Custom domain" --> "Add Domain" --> **\[ Save \]**

#### Domain DNS Settings
- Create **A** record that points to: 185.199.108.153
- If using Cloudflare, make sure to disable proxy.

Official Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

#### 404 Redirect
- Github Pages allows Redirect by creating a 404.html file.
- Run ```npm build``` to do this automatically

## ❯ Private Hosting

> If you want to keep Docs private. Serve ```/index.html``` and the rest of the files on your own server. Bring your own Auth.

## ✅ Done

You now have free, reliable hosting for your docs. Nice.

Visit: https://NAME.github.io/REPO

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Update

- You can pull the latest version of "Fwd/Docs" at any time by running:
```
npm run update
```

> Warning: This will override ```/assets``` and ```index.html```. Other files and folders are not affected.

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
