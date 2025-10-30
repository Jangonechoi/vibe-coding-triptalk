# 트립토크 프로젝트 현황

## 📋 프로젝트 개요

**트립토크**는 여행 게시판 서비스로, 사용자들이 여행 경험을 공유하고 소통할 수 있는 플랫폼입니다.

## 🎨 피그마 디자인 분석

### 1. 로그인 헤더 배리에이션 (노드 ID: 285:33315)

- **로그인 전**: 헤더에 "로그인" 버튼 표시
- **로그인 후**: 사용자 프로필 (홍길동)과 드롭다운 메뉴 표시
- **프로필 클릭**: 사용자 정보 드롭다운 (포인트 충전, 로그아웃 메뉴)

### 2. 로그인 및 회원가입 (노드 ID: 285:32640)

#### 🔐 로그인 섹션

- **최초 상태**: 로고, 환영 메시지, 입력 필드
- **에러 상태**: 빨간색 테두리와 에러 메시지 표시
- **입력 상태**: 이메일 입력 후 비밀번호 미입력 상태

#### 📝 회원가입 섹션

- **최초 상태**: 빈 폼 (이메일, 이름, 비밀번호, 비밀번호 확인)
- **에러 상태**: 모든 필드에 빨간색 테두리와 에러 메시지
- **입력 완료**: 모든 필드 입력된 상태
- **성공 상태**: 회원가입 성공 팝업 모달

## 🏗️ 구현 예정 페이지 구조

### 1. 게시물 목록 페이지

- 헤더 (로그인 상태에 따른 배리에이션)
- 배너 이미지 슬라이더
- "오늘 핫한 트립토크" 섹션
- 게시물 카드 리스트
- 검색 및 필터 기능
- 페이지네이션

### 2. 새로운 게시물 등록 페이지

- 제목, 내용, 이미지 업로드
- 카테고리 선택
- 태그 입력
- 위치 정보

### 3. 게시물 상세 페이지

- 게시물 내용 표시
- 작성자 정보
- 댓글 시스템
- 좋아요/북마크 기능
- 수정/삭제 버튼 (작성자만)

### 4. 게시물 수정 페이지

- 기존 내용 수정
- 이미지 교체
- 카테고리/태그 수정

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: 파란색 (`#2974e5`)
- **Error**: 빨간색 (`#f66a6a`)
- **Text**: 검은색 (`#000000`), 회색 (`#333333`, `#777777`)
- **Background**: 흰색 (`#ffffff`), 연한 회색 (`#f2f2f2`)

### 타이포그래피

- **Font Family**: Pretendard Variable
- **Weights**: Regular (400), Medium (500), SemiBold (600), Bold (700)

### 컴포넌트

- **Button**: 3가지 variant (primary, secondary, tertiary), 3가지 size, 테마/다크모드 지원, 좌우 아이콘 지원
- **Input**: 3가지 variant, 3가지 size, textarea 지원, 에러/헬퍼 텍스트, 좌우 아이콘 및 버튼, 자동 카운터
- **Modal**: Portal 기반 렌더링, Context API 통합
- **Pagination**: 반응형 페이지 번호 표시, 최대 표시 페이지 수 제한, 첫/끝 페이지 이동
- **Searchbar**: 검색 아이콘 기본 제공, 클리어 버튼, Enter 키 검색, 커스텀 아이콘 지원
- **SelectBox**: 드롭다운 선택, 키보드 네비게이션, 외부 클릭 감지, 에러/헬퍼 텍스트
- **Banner**: Swiper 기반 이미지 슬라이더, 자동 재생, 페이지네이션, 반응형
- **Layout**: 헤더, 배너, 메인 콘텐츠 영역 분리, Navigation 탭 지원

## 🚀 개발 진행 상황

### ✅ 완료된 작업

- [x] 피그마 디자인 분석
- [x] 프로젝트 구조 파악
- [x] 디자인 시스템 정리
- [x] Color Tokens 시스템 구축 (다크모드 지원)
- [x] Typography Tokens 시스템 구축 (모바일/데스크톱 반응형)
- [x] 유틸리티 함수 개발 (cn - className merge)
- [x] 컴포넌트 라이브러리 구축
  - [x] Button 컴포넌트 (variant, size, theme, 아이콘 지원)
  - [x] Input 컴포넌트 (textarea 지원, 에러/헬퍼 텍스트, 아이콘 지원)
  - [x] Modal 컴포넌트 (Portal 기반)
  - [x] Pagination 컴포넌트 (다양한 variant, 반응형 페이지네이션)
  - [x] Searchbar 컴포넌트 (검색 아이콘, 클리어 버튼)
  - [x] SelectBox 컴포넌트 (키보드 네비게이션, 외부 클릭 감지)
  - [x] Banner 컴포넌트 (Swiper 기반 슬라이더)
  - [x] DatePicker 컴포넌트 (날짜 선택기)
  - [x] Radio 컴포넌트 (라디오 버튼)
- [x] Layout 컴포넌트 개발 (헤더, 배너, 메인 영역)
- [x] Layout Hooks 개발 (area.hook, auth.hook, link.routing.hook)
- [x] Storybook 설정 및 스토리 파일 작성
- [x] Provider 시스템 구축
  - [x] Modal Provider (Context 기반)
  - [x] NextThemes Provider (다크모드 지원)
  - [x] React-Query Provider (준비됨)
  - [x] Auth Provider (준비됨)
- [x] 게시판 관련 페이지 구현
  - [x] 게시물 목록 페이지 (/boards)
  - [x] 게시물 상세 페이지 (/boards/[id])
- [x] 게시판 관련 컴포넌트 개발
  - [x] BoardsList 컴포넌트 (게시물 목록 표시)
  - [x] BoardsDetail 컴포넌트 (게시물 상세 정보)
  - [x] BoardsHot 컴포넌트 (인기 게시물 섹션)
  - [x] BoardsWrite 컴포넌트 (게시물 작성 폼)
  - [x] CommentList 컴포넌트 (댓글 목록)
  - [x] CommentWrite 컴포넌트 (댓글 작성)

### 🔄 진행 중인 작업

- [ ] 인증 시스템 구현 (로그인/회원가입)
- [ ] API 연동 및 데이터 페칭
- [ ] 게시물 CRUD 기능 완성
- [ ] 실제 백엔드 연동

### 📋 예정된 작업

- [ ] 이미지 업로드 기능 구현
- [ ] 검색 및 필터링 기능 연동
- [ ] 좋아요/북마크 기능 구현
- [ ] 사용자 프로필 페이지
- [ ] 포인트 시스템 구현
- [ ] 반응형 디자인 완성도 향상
- [ ] 성능 최적화 및 SEO

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: Storybook
- **Testing**: Playwright, Vitest
- **Form Management**: React Hook Form, Zod
- **State Management**: React Query, Context API
- **Theme Management**: Next Themes (다크모드 지원)
- **Slider**: Swiper
- **Package Manager**: pnpm

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js 앱 라우터
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── globals.css        # 전역 스타일
│   └── boards/            # 게시판 라우트
│       ├── page.tsx       # 게시물 목록 페이지
│       └── [id]/          # 동적 라우트
│           └── page.tsx   # 게시물 상세 페이지
├── commons/               # 공통 컴포넌트 및 로직
│   ├── components/        # UI 컴포넌트
│   │   ├── button/       # 버튼 컴포넌트
│   │   ├── input/        # 입력 컴포넌트
│   │   ├── modal/        # 모달 컴포넌트
│   │   ├── pagination/   # 페이지네이션
│   │   ├── searchbar/    # 검색바
│   │   ├── selectbox/    # 선택박스
│   │   ├── banner/       # 배너 슬라이더
│   │   ├── date-picker/  # 날짜 선택기
│   │   ├── radio/        # 라디오 버튼
│   │   ├── boards-list/  # 게시물 목록
│   │   ├── boards-detail/# 게시물 상세
│   │   │   ├── comment-list/ # 댓글 목록
│   │   │   └── comment-write/# 댓글 작성
│   │   ├── boards-hot/   # 인기 게시물
│   │   └── boards-write/ # 게시물 작성
│   ├── constants/        # 상수 정의
│   │   ├── color.ts      # 컬러 토큰
│   │   ├── typography.ts # 타이포그래피 토큰
│   │   └── url.ts        # URL 상수
│   ├── layout/           # 레이아웃 컴포넌트
│   │   ├── hooks/        # 레이아웃 훅
│   │   └── layout-wrapper.tsx # 레이아웃 래퍼
│   ├── providers/        # Context 프로바이더
│   │   ├── auth/         # 인증 프로바이더
│   │   ├── modal/        # 모달 프로바이더
│   │   ├── next-themes/  # 테마 프로바이더
│   │   └── react-query/  # React Query 프로바이더
│   └── utils/           # 유틸리티 함수
│       └── cn.ts        # className 병합 함수
```

## 🎯 다음 단계

1. **인증 시스템 구현**

   - 로그인/회원가입 페이지 UI 구현
   - JWT 토큰 기반 인증 로직
   - Auth Provider 실제 로직 구현
   - 로그인 상태 유지 및 자동 로그아웃

2. **API 연동 및 데이터 관리**

   - API 클라이언트 설정 (Axios/Fetch)
   - React Query를 활용한 서버 상태 관리
   - 에러 핸들링 및 로딩 상태 처리
   - 무한 스크롤 구현

3. **게시물 CRUD 완성**

   - 게시물 작성/수정 API 연동
   - 이미지 업로드 기능 구현
   - 게시물 삭제 기능
   - 실시간 미리보기

4. **상호작용 기능 구현**

   - 댓글 작성/수정/삭제
   - 좋아요/북마크 토글
   - 조회수 카운팅
   - 신고 기능

5. **UX 개선 및 최적화**
   - 스켈레톤 로딩 추가
   - 에러 바운더리 구현
   - SEO 최적화 (메타 태그)
   - 성능 최적화 (이미지 최적화, 코드 스플리팅)

## 📊 개발 통계

- **총 컴포넌트**: 15개
  - **기본 UI**: Button, Input, Modal, Pagination, Searchbar, SelectBox, Banner, DatePicker, Radio
  - **게시판 관련**: BoardsList, BoardsDetail, BoardsHot, BoardsWrite, CommentList, CommentWrite
- **페이지**: 3개 (메인, 게시물 목록, 게시물 상세)
- **디자인 토큰**: Color (다크모드 포함), Typography (반응형)
- **Provider**: 4개 (Auth, Modal, NextThemes, React Query)
- **Storybook 스토리**: 9개 (각 기본 UI 컴포넌트별)
- **테스트 환경**: Playwright (E2E), Vitest (단위 테스트)
