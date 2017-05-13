'use strict';
const foregroundColor = '#131325';
const backgroundColor = 'rgba(255, 255, 255, 0.7)';
const mainColor = '#614BBB'
const colors = {
  black: '#000000',
  white: '#ffffff',
  red: '#E70348',
  green: '#3AD04E',
  blue: '#132C33',
  cyan: '#203F50',
  yellow: '#CDAC37',
  magenta: '#614BBB',
  white: '#9F9F9F',

  // Light Colors
  lightBlack: '#000000',
  lightRed: '#E70348',
  lightGreen: '#3AD04E',
  lightYellow: '#CDAC37',
  lightBlue: '#162941',
  lightMagenta: '#614BBB',
  lightCyan: '#468EA1',
  lightWhite: '#ffffff'
}



module.exports.decorateConfig = (config) => {

  // New configuration template
  const confObj = Object.assign({}, config, {
    foregroundColor: foregroundColor,
    backgroundColor: backgroundColor,
    borderColor: config.mainColor || mainColor,
    cursorColor: `${ config.cursorColor || config.mainColor || mainColor }`,
    colors,
    mainColor: `${config.mainColor || mainColor}`,
    termCSS: `
      ${config.termCSS}
      x-screen x-row {
          font-variant-ligatures: initial;
      }
    `,
    css: `
      ${config.css}
    `
  });

  return confObj;

  exports.onWindow = (browserWindow) => {
    if (confObj.vibrance == true) {
      browserWindow.setVibrancy('dark');
    }
  }

}
