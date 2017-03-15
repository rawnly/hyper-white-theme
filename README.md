# hyper-white-theme
White & Purple theme for [:zap:Hyper](https://hyper.is)

![screenshot](https://cloud.githubusercontent.com/assets/16429579/23942788/b1bc05fa-096d-11e7-9528-cef9da1f40e8.png)
> Live preview [Here][web_preview]

# Installation
To install this theme just edit (<kbd>Cmd + ,</kbd>) your `~/.hyper.js` and add `hyper-white-theme` to the `plugins: []` array.

```javascript
  // ~/.hyper.js
  ...
    plugins: [
      'hyper-white-theme'
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
  $ hpm i hyper-white-theme
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

  // etc...
```
## Icon
<img src="https://cloud.githubusercontent.com/assets/16429579/23942872/ee8fd704-096d-11e7-95d5-2eb35c5df702.png" alt="icon" width="100" align="left" style="margin-right: 20px" />

If you like it, you can download this custom icon themed for `hyper-white-theme`!

<br>
<br>
<br>


> Hey! I hope you enjoyed this theme, if you, leave a star :star:. It's **free**!

[screenshot]: assets/screenshot.png
[web_preview]: https://rawnly.github.io/hyper-white-theme
