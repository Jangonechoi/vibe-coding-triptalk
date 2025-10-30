import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Banner from "../components/banner";
import { useLinkRouting } from "./hooks/index.link.routing.hook";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showBanner?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showBanner = true,
}) => {
  const { handleClickLogo, handleClickTapTripTalk, handleClickLogin } =
    useLinkRouting();
  return (
    <div className={styles.container} data-testid="layout-root">
      {showHeader && (
        <header className={styles.header} data-testid="layout-header-ready">
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <div
                className={styles.logoArea}
                data-testid="layout-header-logo"
                onClick={handleClickLogo}
              >
                <Image
                  src="/icons/style=black, size=s.svg"
                  alt="트립토크"
                  width={36}
                  height={22}
                  priority
                />
              </div>
              <nav className={styles.tap}>
                <button
                  className={`${styles.tapItem} ${styles.tapItemActive}`}
                  data-testid="layout-nav-triptalk"
                  onClick={handleClickTapTripTalk}
                >
                  트립토크
                </button>
                <button className={styles.tapItem}>숙박권 구매</button>
                <button className={styles.tapItem}>마이 페이지</button>
              </nav>
            </div>
            <div className={styles.headerRight}>
              <button
                className={styles.loginButton}
                data-testid="layout-login-button"
                onClick={handleClickLogin}
              >
                <span>로그인</span>
                <Image
                  src="/icons/outline/right_arrow.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={styles.loginButtonIcon}
                />
              </button>
            </div>
          </div>
        </header>
      )}
      {showBanner && <Banner />}
      <div className={styles.gap}></div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
