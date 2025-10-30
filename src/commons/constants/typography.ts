/**
 * Typography System
 *
 * 피그마 파운데이션을 기반으로 한 타이포그래피 토큰 시스템
 * - 한국어: Pretendard Variable
 * - 영문: 추후 확장 가능한 구조
 * - 모바일/데스크톱 반응형 지원
 */

// 폰트 패밀리 정의
export const fontFamilies = {
  korean: {
    primary:
      'Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    fallback:
      'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
  },
  english: {
    primary:
      'Inter, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
    fallback:
      'system-ui, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
  },
} as const;

// 폰트 웨이트 정의
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// 타이포그래피 스케일 정의 (피그마 파운데이션 기반)
export const typography = {
  // Bold 스타일들
  b_28_36: {
    fontSize: { mobile: "24px", desktop: "28px" },
    lineHeight: { mobile: "32px", desktop: "36px" },
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.korean.primary,
  },
  b_24_32: {
    fontSize: { mobile: "20px", desktop: "24px" },
    lineHeight: { mobile: "28px", desktop: "32px" },
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.korean.primary,
  },
  b_20_28: {
    fontSize: { mobile: "18px", desktop: "20px" },
    lineHeight: { mobile: "24px", desktop: "28px" },
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.korean.primary,
  },
  b_16_24: {
    fontSize: { mobile: "14px", desktop: "16px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.korean.primary,
  },
  B_14_20: {
    fontSize: { mobile: "12px", desktop: "14px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.korean.primary,
  },

  // SemiBold 스타일들
  sb_18_24: {
    fontSize: { mobile: "16px", desktop: "18px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.semibold,
    fontFamily: fontFamilies.korean.primary,
  },
  sb_16_24: {
    fontSize: { mobile: "14px", desktop: "16px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.semibold,
    fontFamily: fontFamilies.korean.primary,
  },
  sb_14_20: {
    fontSize: { mobile: "12px", desktop: "14px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.semibold,
    fontFamily: fontFamilies.korean.primary,
  },

  // Medium 스타일들
  me_20_24: {
    fontSize: { mobile: "18px", desktop: "20px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },
  me_16_24: {
    fontSize: { mobile: "14px", desktop: "16px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },
  me_16_20: {
    fontSize: { mobile: "14px", desktop: "16px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },
  me_14_20: {
    fontSize: { mobile: "12px", desktop: "14px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },
  me_13_20: {
    fontSize: { mobile: "11px", desktop: "13px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },
  me_11_12: {
    fontSize: { mobile: "10px", desktop: "11px" },
    lineHeight: { mobile: "10px", desktop: "12px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },

  // Regular 스타일들
  r_20_24: {
    fontSize: { mobile: "18px", desktop: "20px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.korean.primary,
  },
  r_16_24: {
    fontSize: { mobile: "14px", desktop: "16px" },
    lineHeight: { mobile: "20px", desktop: "24px" },
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.korean.primary,
  },
  r_14_20: {
    fontSize: { mobile: "12px", desktop: "14px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.korean.primary,
  },
  r_12_20: {
    fontSize: { mobile: "10px", desktop: "12px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.korean.primary,
  },
  r_11_12: {
    fontSize: { mobile: "10px", desktop: "11px" },
    lineHeight: { mobile: "10px", desktop: "12px" },
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.korean.primary,
  },

  // Light 스타일들
  l_14_20: {
    fontSize: { mobile: "12px", desktop: "14px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.light,
    fontFamily: fontFamilies.korean.primary,
  },
  l_12_20: {
    fontSize: { mobile: "10px", desktop: "12px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.light,
    fontFamily: fontFamilies.korean.primary,
  },

  // Medium 12px 스타일
  me_12_20: {
    fontSize: { mobile: "10px", desktop: "12px" },
    lineHeight: { mobile: "16px", desktop: "20px" },
    fontWeight: fontWeights.medium,
    fontFamily: fontFamilies.korean.primary,
  },
} as const;

// 타이포그래피 토큰 타입 정의
export type TypographyToken = keyof typeof typography;
export type FontWeight = keyof typeof fontWeights;
export type FontFamily = keyof typeof fontFamilies.korean;

// 유틸리티 함수들
export const getTypographyStyle = (
  token: TypographyToken,
  breakpoint: "mobile" | "desktop" = "desktop"
) => {
  const style = typography[token];
  return {
    fontSize: style.fontSize[breakpoint],
    lineHeight: style.lineHeight[breakpoint],
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
  };
};

// CSS 변수 생성을 위한 헬퍼 함수
export const generateTypographyCSS = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(typography).forEach(([key, value]) => {
    cssVars[`--typography-${key}-font-size-mobile`] = value.fontSize.mobile;
    cssVars[`--typography-${key}-font-size-desktop`] = value.fontSize.desktop;
    cssVars[`--typography-${key}-line-height-mobile`] = value.lineHeight.mobile;
    cssVars[`--typography-${key}-line-height-desktop`] =
      value.lineHeight.desktop;
    cssVars[`--typography-${key}-font-weight`] = value.fontWeight.toString();
    cssVars[`--typography-${key}-font-family`] = value.fontFamily;
  });

  return cssVars;
};

// 반응형 타이포그래피를 위한 CSS 클래스 생성 헬퍼
export const getResponsiveTypography = (token: TypographyToken) => {
  const style = typography[token];
  return {
    fontSize: `clamp(${style.fontSize.mobile}, 2.5vw, ${style.fontSize.desktop})`,
    lineHeight: `clamp(${style.lineHeight.mobile}, 3vw, ${style.lineHeight.desktop})`,
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
  };
};

// 영문 타이포그래피 지원을 위한 헬퍼 함수
export const getEnglishTypography = (
  token: TypographyToken,
  breakpoint: "mobile" | "desktop" = "desktop"
) => {
  const style = typography[token];
  return {
    fontSize: style.fontSize[breakpoint],
    lineHeight: style.lineHeight[breakpoint],
    fontWeight: style.fontWeight,
    fontFamily: fontFamilies.english.primary,
  };
};

// 언어별 타이포그래피 스타일 생성
export const getLocalizedTypography = (
  token: TypographyToken,
  language: "korean" | "english" = "korean",
  breakpoint: "mobile" | "desktop" = "desktop"
) => {
  const style = typography[token];
  return {
    fontSize: style.fontSize[breakpoint],
    lineHeight: style.lineHeight[breakpoint],
    fontWeight: style.fontWeight,
    fontFamily:
      language === "english" ? fontFamilies.english.primary : style.fontFamily,
  };
};

// CSS 변수 기반 타이포그래피 스타일 생성
export const getCSSVariableTypography = (token: TypographyToken) => {
  return {
    fontSize: `var(--typography-${token}-font-size-mobile)`,
    lineHeight: `var(--typography-${token}-line-height-mobile)`,
    fontWeight: `var(--typography-${token}-font-weight)`,
    fontFamily: `var(--typography-${token}-font-family)`,
  };
};

// 반응형 CSS 변수 타이포그래피 스타일 생성
export const getResponsiveCSSVariableTypography = (token: TypographyToken) => {
  return {
    fontSize: `clamp(var(--typography-${token}-font-size-mobile), 2.5vw, var(--typography-${token}-font-size-desktop))`,
    lineHeight: `clamp(var(--typography-${token}-line-height-mobile), 3vw, var(--typography-${token}-line-height-desktop))`,
    fontWeight: `var(--typography-${token}-font-weight)`,
    fontFamily: `var(--typography-${token}-font-family)`,
  };
};

export default typography;
