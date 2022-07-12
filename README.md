![line](https://github.com/fwd/docs/raw/master/images/banner.png)

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h2 align="center" style="font-size: 30px">Easy Docs (HTML + JSON + Markdown)</h2>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Live Demo

Nano.to Docs: <a href="https://docs.nano.to" target="_blank">https://docs.nano.to</a>

## ❯ 1. Install

```bash
git clone git@github.com:fwd/docs.git && cd docs
```

## ❯ 2. Edit

Add the cloned folder to your favorite editor and, serve ```/index.html``` with any language. 

**NPM**: ```npm start```

**PHP**: ```php -S localhost:8080```

- [/pages](/pages) - Pages in [Markdown](https://www.markdownguide.org/cheat-sheet/#basic-syntax).
- [config.json](/config.json) - Configure Documentation.
- [favicon.png](/favicon.png) - Customize Favicon.
- [/images](/images) - Store Documentation Assets.

**Optional:**
- [custom.css](/custom.css) - Optional Custom CSS.
- [/assets](/assets) - Docs CSS & JS Files.
- [index.html](/index.html) - Most things are configured via JSON file.

## ❯ 3. Deploy

Remove the .git folder, and add your own. 

```bash
rm -rf .git
git init
git add . && git commit -m "Look Ma! I'm on Github."
git branch -M "master"
git remote add origin git@github.com:NAME/REPO.git
git push -u origin "master"
```

## ❯ 4. Free Website Hosting

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

#### ❯ Private Hosting

> If you want to keep Docs private. Serve ```/index.html``` and the rest of the files on your own server. Bring your own Auth.

## ❯ ✅ Done

You now have free, reliable hosting for your docs. Nice.

Visit: https://NAME.github.io/REPO

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Further Reading

#### Redirects
- Github Pages allows Redirect by creating a 404.html file.
- Run ```npm build``` to do this automatically

#### Updating Docs ()

You can pull the latest version of "Easy Docs" at any time by running:

```
npm run update
```

> Warning: This will override ```/assets``` and ```index.html```. You can always update manually by cloning this repo again and replacing the files you need.

## ❯ Contributing

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome at [issues page](https://github.com/fwd/docs/issues).

## ❯ License

MIT License

Copyright © [@nano2dev](https://twitter.com/nano2dev).

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
