export interface LayoutConfig {
  showHeader: boolean;
  showBanner: boolean;
}

/**
 * 페이지 경로에 따라 헤더와 배너 표시 여부를 결정하는 함수
 */
export function getLayoutConfig(pathname: string): LayoutConfig {
  // 로그인, 회원가입 페이지 - 헤더와 배너 모두 숨김
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return {
      showHeader: false,
      showBanner: false,
    };
  }

  // 게시물 등록 페이지 - 배너만 숨김
  if (pathname.startsWith("/boards/write")) {
    return {
      showHeader: true,
      showBanner: false,
    };
  }

  // 게시물 수정 페이지 - 헤더와 배너 모두 숨김
  if (pathname.includes("/boards/") && pathname.includes("/edit")) {
    return {
      showHeader: false,
      showBanner: false,
    };
  }

  // 기본값 - 헤더와 배너 모두 표시
  return {
    showHeader: true,
    showBanner: true,
  };
}
