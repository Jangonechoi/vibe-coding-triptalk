/**
 * Color Tokens
 * 피그마 파운데이션에서 추출한 컬러 토큰들
 * 다크모드 지원을 위한 컬러 시스템
 */

// Gray Scale Colors
export const gray = {
  w: "#ffffff", // white
  50: "#f2f2f2", // lightest gray
  100: "#e4e4e4", // very light gray
  200: "#d4d3d3", // light gray
  300: "#c7c7c7", // medium light gray
  400: "#ababab", // medium gray
  500: "#919191", // medium dark gray
  600: "#777777", // dark gray
  700: "#5f5f5f", // darker gray
  800: "#333333", // very dark gray
  900: "#1c1c1c", // darkest gray
  B: "#000000", // black
} as const;

// Primary Colors
export const primary = {
  main: "#2974e5", // main brand color
} as const;

// Semantic Colors
export const semantic = {
  red: "#f66a6a", // error/alert color
} as const;

// Color Token Types
export type GrayColor = keyof typeof gray;
export type PrimaryColor = keyof typeof primary;
export type SemanticColor = keyof typeof semantic;

// All Colors Union
export type ColorToken = GrayColor | PrimaryColor | SemanticColor;

// Color Token Values
export const colors = {
  gray,
  primary,
  semantic,
} as const;

// Dark Mode Color Mappings
export const darkModeColors = {
  gray: {
    w: gray.B, // white becomes black in dark mode
    50: gray[900], // lightest becomes darkest
    100: gray[800], // very light becomes very dark
    200: gray[700], // light becomes dark
    300: gray[600], // medium light becomes medium dark
    400: gray[500], // medium stays medium
    500: gray[400], // medium dark becomes medium light
    600: gray[300], // dark becomes light
    700: gray[200], // darker becomes light
    800: gray[100], // very dark becomes very light
    900: gray[50], // darkest becomes lightest
    B: gray.w, // black becomes white in dark mode
  },
  primary: {
    main: "#4a90e2", // slightly lighter blue for dark mode
  },
  semantic: {
    red: "#ff6b6b", // slightly lighter red for dark mode
  },
} as const;

// Utility Functions
export const getColor = (
  colorPath: string,
  isDarkMode: boolean = false
): string => {
  const [category, shade] = colorPath.split("/") as [
    keyof typeof colors,
    string
  ];

  if (isDarkMode && darkModeColors[category as keyof typeof darkModeColors]) {
    const darkModeCategory =
      darkModeColors[category as keyof typeof darkModeColors];
    return (
      (darkModeCategory as Record<string, string>)[shade] ||
      (colors[category as keyof typeof colors] as Record<string, string>)[shade]
    );
  }

  return (
    (colors[category as keyof typeof colors] as Record<string, string>)[
      shade
    ] || "#000000"
  );
};

// CSS Variable Names Generator
export const generateCSSVariables = (isDarkMode: boolean = false) => {
  const colorSet = isDarkMode ? darkModeColors : colors;
  const variables: Record<string, string> = {};

  Object.entries(colorSet).forEach(([category, shades]) => {
    Object.entries(shades as Record<string, string>).forEach(
      ([shade, value]) => {
        variables[`--color-${category}-${shade}`] = value;
      }
    );
  });

  return variables;
};

// Export all color tokens for easy access
export default colors;
