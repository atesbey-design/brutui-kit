export declare const colorPalette: {
    readonly red: readonly ["#FF0000", "#FF3333", "#FF6666", "#FF9999", "#FFCCCC"];
    readonly blue: readonly ["#0000FF", "#3333FF", "#6666FF", "#9999FF", "#CCCCFF"];
    readonly yellow: readonly ["#FFFF00", "#FFFF33", "#FFFF66", "#FFFF99", "#FFFFCC"];
    readonly green: readonly ["#00FF00", "#33FF33", "#66FF66", "#99FF99", "#CCFFCC"];
    readonly purple: readonly ["#8B00FF", "#9F33FF", "#B266FF", "#C699FF", "#DACCFF"];
    readonly orange: readonly ["#FFA500", "#FFB733", "#FFC966", "#FFDB99", "#FFEDCC"];
    readonly pink: readonly ["#FF69B4", "#FF87C3", "#FFA5D2", "#FFC3E1", "#FFE1F0"];
    readonly teal: readonly ["#00CED1", "#33D7D9", "#66E0E2", "#99E9EB", "#CCF4F5"];
    readonly lime: readonly ["#32CD32", "#5AD75A", "#82E082", "#ABEAAB", "#D4F5D4"];
    readonly brown: readonly ["#8B4513", "#A2673F", "#B9896B", "#D0AB97", "#E7CDC3"];
    readonly gray: readonly ["#808080", "#999999", "#B3B3B3", "#CCCCCC", "#E6E6E6"];
    readonly black: readonly ["#000000", "#333333", "#666666", "#999999", "#CCCCCC"];
};
export type ColorPalette = typeof colorPalette;
export type ColorName = keyof ColorPalette;
export type ColorShade = 0 | 1 | 2 | 3 | 4;
