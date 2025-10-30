"use client";

import { usePathname } from "next/navigation";
import { Layout } from "@/commons/layout";
import { getLayoutConfig } from "@/commons/utils/layout-config";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const layoutConfig = getLayoutConfig(pathname);

  return (
    <Layout
      showHeader={layoutConfig.showHeader}
      showBanner={layoutConfig.showBanner}
    >
      {children}
    </Layout>
  );
}
