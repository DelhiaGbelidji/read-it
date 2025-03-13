export const COLORS = {
  //Palette
  white: '#F8F8F8',
  dark: "#0A0C0F",
  black: '#000',
  burgundi: '#5D0822',
  pink: '#F7195C',
  grey: '#B8A9AE',
  lightPink: '#FCDDE7',
  lightGrey: '#F7F5F5',
  clear: "#FAF9F9",
  moon500: "#8595AD",

   // neutral
   neutral: "#545E6E",

  red: "#DF4B35",

  grey100: "#FAFAFA",
  grey200: "#EBEBEB",
  grey300: "#DCDCDC",
  grey400: "#B5B5B5",
  grey500: "#949494",
  grey600: "#6A6A6A",
  grey700: "#565656",
  grey800: "#3A3A3A",
  
  // action buttons
  borderButton: '#FDDFD9',
  disabledButton: '#F7F7F8',
  disabledTextButton: '#667A97',
  hoverButton: '#F7EBEC',
  outlinedHoverButton: '#C2C2C2',

}

export const SPACING_UNIT = 4;
export const FONT_FAMILY = "Roboto";

export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
};