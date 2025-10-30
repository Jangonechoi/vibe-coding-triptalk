"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { URL_PATHS } from "@/commons/constants/url";

export interface LinkRoutingHandlers {
  handleClickLogo: () => void;
  handleClickTapTripTalk: () => void;
  handleClickLogin: () => void;
}

export function useLinkRouting(): LinkRoutingHandlers {
  const router = useRouter();

  const handleClickLogo = useCallback(() => {
    router.push(URL_PATHS.BOARDS.LIST);
  }, [router]);

  const handleClickTapTripTalk = useCallback(() => {
    router.push(URL_PATHS.BOARDS.LIST);
  }, [router]);

  const handleClickLogin = useCallback(() => {
    router.push(URL_PATHS.AUTH.LOGIN);
  }, [router]);

  return {
    handleClickLogo,
    handleClickTapTripTalk,
    handleClickLogin,
  };
}
