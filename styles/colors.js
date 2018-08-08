/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Config - color
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Color from 'color'

const base = {
  gray: '#626262',
  grayLight: '#9b9b9b',
  dark: '#333333',
  blue: '#00A1DF',
  red: '#d0021b',
  pink: '#e91549',
}

export default {
  primary: base.blue,
  primaryHover: Color(base.blue).lighten(0.05).rgb().string(),
  textGray: base.gray,
  textGrayLight: base.grayLight,
  textDark: base.dark,
  textRed: base.red,
  textPink: base.pink,
  bgDark: base.dark,
  bgRed: base.red,
  slickLabel: '#e6e6e6',
  slickLabelActive: 'black',
  borderColor: '#f6f6f6',
  borderRed: '#ff1a1a',
  // failedShadow: Color(base.blue).rgb().fade(0.9),
}
