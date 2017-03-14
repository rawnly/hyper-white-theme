# hyper-white-theme
White & Purple theme for [:zap:Hyper](https://hyper.is)

![screen][screenshot]
> Live preview [Here][web_preview]

# Installation
To install this theme just edit (<kbd>Cmd + ,</kbd>) your `~/.hyper.js` and add `hyper-material-theme` to the `plugins: []` array.

```javascript
  // ~/.hyper.js
  ...
    plugins: [
      'hyper-material-theme'
      ],

    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: []
  }
```
Then **Full Reload** or **Restart** the application <kbd>Cmd + Shift + R</kbd>.

Also you can use [hpm](https://github.com/zeit/hpm) (Hyper Package Manager)

```bash
  # Using HPM
  $ hpm i hyper-material-theme
```

<br>

## Config
This theme provides 1 optional extra setting that you can add in your `~/.hyper.js` configuration file.

```javascript
  colors: {
    ...
  },

  // Use HEX colors
  mainColor: '#123456',
  shell: '/usr/bin/zsh', // or whatever you use
  // etc...
```

> Hey! I hope you enjoyed this theme, if you, leave a star :star:. It's **free**!

[screenshot]: assets/screenshot.png
[web_preview]: https://rawnly.github.io/hyper-white-theme
