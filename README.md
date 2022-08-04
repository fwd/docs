![line](https://github.com/fwd/docs/raw/master/images/banner.png)

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h1 align="center" style="font-size: 30px">Easy Docs</h1>
<h3 align="center" style="font-size: 30px">(HTML + JSON + Markdown)</h3>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## Live Demo

<a href="https://docs.nano.to" target="_blank">https://docs.nano.to</a>

## Features

- 1 Minute Install
- No Compiling or Installing
- Write in Markdown
- Local & **Remote** Markdown Files
- Host on Github Pages
- Edit Docs on Github (If you want)
- Changelog & FAQ Section
- No Installing or Compiling
- Light/Dark Mode
- Offline Support
- Mobile Optimized
- Developer Friendly 
- **Mars Ready 🚀**

## ❯ 1. Install

```bash
git clone git@github.com:fwd/docs.git && cd docs
```

## ❯ 2. Edit

Open ```docs``` in your favorite editor, and serve ```/index.html``` with a server. 

**NPM**: ```npm start```

**PHP**: ```php -S localhost:8080```

**Edit:**

- [/pages](/pages) - Pages in [Markdown](https://www.markdownguide.org/cheat-sheet/#basic-syntax).
- [config.json](/config.json) - Configure Documentation.
- [favicon.png](/favicon.png) - Customize Favicon.
- [/images](/images) - Images for your docs.

**Optional:**
- [custom.css](/custom.css) - Optional, Custom CSS.
- [index.html](/index.html) - Most things are configured via JSON file.
- [/assets](/assets) - Docs CSS & JS Files.

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

## ❯ 4. Enable Github Pages

- Github repo must be public
- Go to [Settings Page](/../../settings/pages)
- Source → "Master" → "/Root"
- Save

Your public URL: https://NAME.github.io/REPO

#### Optional: Custom Domain:

- Go to [Settings Page](/../../settings/pages)
- "Custom domain" → "Add Domain"
- Save

##### Domain DNS Settings

- Create **A** record that points to: **185.199.108.153**
- If using Cloudflare, make sure to disable proxy.

Official Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## ❯ ✅ Done 

You now have free, reliable hosting for your docs. Nice. 

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Further Reading

#### Private Hosting

To keep Docs private, serve ```/index.html``` on your own server. Bring your own Auth.

#### 404 & Redirects
- Github Pages allows Redirect by creating a 404.html file.
- Run ```npm build``` to do this automatically

```
cp index.html 404.html
```

#### Updating Docs

More features are planned for **Easy Docs**. If you don't edit ```/assets``` and ```index.html```. You can update at anytime. 

```
npm run update
```


**Planned Features**

- Translation
- Codepen
- [API Testing](https://petstore3.swagger.io/)

## ❯ Contributing

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome at [issues page](https://github.com/fwd/docs/issues).

## ❯ License

MIT License

Copyright © [@nano2dev](https://twitter.com/nano2dev).

## ❯ Stargazers

[![Stargazers over time](https://starchart.cc/fwd/docs.svg)](https://github.com/fwd/docs)
