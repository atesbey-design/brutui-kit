export const colorPalette = {
  red: ['#FF0000', '#FF3333', '#FF6666', '#FF9999', '#FFCCCC'],
  blue: ['#0000FF', '#3333FF', '#6666FF', '#9999FF', '#CCCCFF'],
  yellow: ['#FFFF00', '#FFFF33', '#FFFF66', '#FFFF99', '#FFFFCC'],
  green: ['#00FF00', '#33FF33', '#66FF66', '#99FF99', '#CCFFCC'],
  purple: ['#8B00FF', '#9F33FF', '#B266FF', '#C699FF', '#DACCFF'],
  orange: ['#FFA500', '#FFB733', '#FFC966', '#FFDB99', '#FFEDCC'],
  pink: ['#FF69B4', '#FF87C3', '#FFA5D2', '#FFC3E1', '#FFE1F0'],
  teal: ['#00CED1', '#33D7D9', '#66E0E2', '#99E9EB', '#CCF4F5'],
  lime: ['#32CD32', '#5AD75A', '#82E082', '#ABEAAB', '#D4F5D4'],
  brown: ['#8B4513', '#A2673F', '#B9896B', '#D0AB97', '#E7CDC3'],
  gray: ['#808080', '#999999', '#B3B3B3', '#CCCCCC', '#E6E6E6'],
  black: ['#000000', '#333333', '#666666', '#999999', '#CCCCCC'],
} as const;

export type ColorPalette = typeof colorPalette;
export type ColorName = keyof ColorPalette;
export type ColorShade = 0 | 1 | 2 | 3 | 4;
