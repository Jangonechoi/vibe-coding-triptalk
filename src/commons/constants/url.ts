/**
 * URL 경로 관리 시스템
 * 다이나믹 라우팅, 접근 권한, 레이아웃 노출 설정을 통합 관리
 */

// ============================================================================
// 1. URL 경로 상수 정의
// ============================================================================

export const URL_PATHS = {
  // 인증 관련
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },

  // 게시물 관련
  BOARDS: {
    LIST: "/boards",
    NEW: "/boards/new",
    DETAIL: (boardId: string | number) => `/boards/${boardId}`,
  },
} as const;

// ============================================================================
// 2. 접근 권한 타입 정의
// ============================================================================

export type AccessLevel = "public" | "member";

export const ACCESS_LEVELS = {
  PUBLIC: "public" as const,
  MEMBER: "member" as const,
} as const;

// ============================================================================
// 3. 레이아웃 노출 설정 타입 정의
// ============================================================================

export interface LayoutConfig {
  header: {
    show: boolean;
    logo: boolean;
    darkModeToggle: boolean;
  };
  banner: boolean;
  navigation: boolean;
  footer: boolean;
}

// ============================================================================
// 4. URL 경로별 설정 정의
// ============================================================================

export interface RouteConfig {
  path: string;
  accessLevel: AccessLevel;
  layout: LayoutConfig;
}

export const ROUTE_CONFIGS: Record<string, RouteConfig> = {
  // 로그인 페이지
  [URL_PATHS.AUTH.LOGIN]: {
    path: URL_PATHS.AUTH.LOGIN,
    accessLevel: ACCESS_LEVELS.PUBLIC,
    layout: {
      header: {
        show: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },

  // 회원가입 페이지
  [URL_PATHS.AUTH.SIGNUP]: {
    path: URL_PATHS.AUTH.SIGNUP,
    accessLevel: ACCESS_LEVELS.PUBLIC,
    layout: {
      header: {
        show: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },

  // 게시물 목록 페이지
  [URL_PATHS.BOARDS.LIST]: {
    path: URL_PATHS.BOARDS.LIST,
    accessLevel: ACCESS_LEVELS.PUBLIC,
    layout: {
      header: {
        show: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },

  // 게시물 생성 페이지
  [URL_PATHS.BOARDS.NEW]: {
    path: URL_PATHS.BOARDS.NEW,
    accessLevel: ACCESS_LEVELS.MEMBER,
    layout: {
      header: {
        show: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: false,
      navigation: true,
      footer: true,
    },
  },
} as const;

// ============================================================================
// 5. URL 헬퍼 함수들
// ============================================================================

/**
 * URL 경로가 유효한지 확인
 */
export const isValidPath = (path: string): boolean => {
  return (
    Object.values(URL_PATHS).some((urlPath) => {
      if (typeof urlPath === "string") {
        return urlPath === path;
      }
      return false;
    }) ||
    (path.startsWith("/boards/") && path !== "/boards/new")
  );
};

/**
 * 다이나믹 라우팅 패턴 매칭
 */
export const matchDynamicRoute = (
  path: string
): { matched: boolean; params?: Record<string, string> } => {
  // 게시물 상세 페이지 패턴 매칭 (/boards/[boardId])
  const boardDetailPattern = /^\/boards\/([^\/]+)$/;
  const boardDetailMatch = path.match(boardDetailPattern);

  if (boardDetailMatch && path !== "/boards/new") {
    return {
      matched: true,
      params: { boardId: boardDetailMatch[1] },
    };
  }

  return { matched: false };
};

/**
 * 경로에 대한 설정 정보 가져오기
 */
export const getRouteConfig = (path: string): RouteConfig | null => {
  // 정확한 경로 매칭
  if (ROUTE_CONFIGS[path]) {
    return ROUTE_CONFIGS[path];
  }

  // 다이나믹 라우팅 매칭
  const dynamicMatch = matchDynamicRoute(path);
  if (dynamicMatch.matched) {
    // 게시물 상세 페이지는 게시물 목록과 동일한 설정 사용
    return ROUTE_CONFIGS[URL_PATHS.BOARDS.LIST];
  }

  return null;
};

/**
 * 접근 권한 확인
 */
export const checkAccess = (
  path: string,
  isAuthenticated: boolean = false
): boolean => {
  const config = getRouteConfig(path);
  if (!config) return false;

  if (config.accessLevel === ACCESS_LEVELS.PUBLIC) {
    return true;
  }

  if (config.accessLevel === ACCESS_LEVELS.MEMBER) {
    return isAuthenticated;
  }

  return false;
};

/**
 * 레이아웃 설정 가져오기
 */
export const getLayoutConfig = (path: string): LayoutConfig | null => {
  const config = getRouteConfig(path);
  return config ? config.layout : null;
};

/**
 * 헤더 표시 여부 확인
 */
export const shouldShowHeader = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.header.show ?? false;
};

/**
 * 로고 표시 여부 확인
 */
export const shouldShowLogo = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.header.logo ?? false;
};

/**
 * 다크모드 토글 표시 여부 확인
 */
export const shouldShowDarkModeToggle = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.header.darkModeToggle ?? false;
};

/**
 * 배너 표시 여부 확인
 */
export const shouldShowBanner = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.banner ?? false;
};

/**
 * 네비게이션 표시 여부 확인
 */
export const shouldShowNavigation = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.navigation ?? false;
};

/**
 * 푸터 표시 여부 확인
 */
export const shouldShowFooter = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.footer ?? false;
};

// ============================================================================
// 6. Next.js Link 컴포넌트용 헬퍼
// ============================================================================

/**
 * Next.js Link href 생성
 */
export const createHref = (
  path: string,
  params?: Record<string, string | number>
): string => {
  if (!params) return path;

  let href = path;
  Object.entries(params).forEach(([key, value]) => {
    href = href.replace(`[${key}]`, String(value));
  });

  return href;
};

/**
 * 게시물 상세 페이지 href 생성
 */
export const createBoardDetailHref = (boardId: string | number): string => {
  return URL_PATHS.BOARDS.DETAIL(boardId);
};

// ============================================================================
// 7. 라우팅 관련 유틸리티
// ============================================================================

/**
 * 현재 경로가 인증이 필요한 페이지인지 확인
 */
export const isAuthRequired = (path: string): boolean => {
  const config = getRouteConfig(path);
  return config?.accessLevel === ACCESS_LEVELS.MEMBER;
};

/**
 * 현재 경로가 공개 페이지인지 확인
 */
export const isPublicPage = (path: string): boolean => {
  const config = getRouteConfig(path);
  return config?.accessLevel === ACCESS_LEVELS.PUBLIC;
};

/**
 * 리다이렉트가 필요한 경로인지 확인
 */
export const shouldRedirect = (
  path: string,
  isAuthenticated: boolean
): boolean => {
  if (isAuthRequired(path) && !isAuthenticated) {
    return true;
  }

  // 인증된 사용자가 로그인/회원가입 페이지에 접근하는 경우
  if (
    isAuthenticated &&
    (path === URL_PATHS.AUTH.LOGIN || path === URL_PATHS.AUTH.SIGNUP)
  ) {
    return true;
  }

  return false;
};

/**
 * 리다이렉트 대상 경로 결정
 */
export const getRedirectPath = (
  path: string,
  isAuthenticated: boolean
): string => {
  if (isAuthRequired(path) && !isAuthenticated) {
    return URL_PATHS.AUTH.LOGIN;
  }

  if (
    isAuthenticated &&
    (path === URL_PATHS.AUTH.LOGIN || path === URL_PATHS.AUTH.SIGNUP)
  ) {
    return URL_PATHS.BOARDS.LIST;
  }

  return path;
};

// ============================================================================
// 8. 타입 내보내기
// ============================================================================

export type URLPaths = typeof URL_PATHS;
export type RouteConfigs = typeof ROUTE_CONFIGS;
export type AccessLevels = typeof ACCESS_LEVELS;

// 기본 내보내기
const urlConstants = {
  URL_PATHS,
  ROUTE_CONFIGS,
  ACCESS_LEVELS,
  isValidPath,
  matchDynamicRoute,
  getRouteConfig,
  checkAccess,
  getLayoutConfig,
  shouldShowHeader,
  shouldShowLogo,
  shouldShowDarkModeToggle,
  shouldShowBanner,
  shouldShowNavigation,
  shouldShowFooter,
  createHref,
  createBoardDetailHref,
  isAuthRequired,
  isPublicPage,
  shouldRedirect,
  getRedirectPath,
};

export default urlConstants;
