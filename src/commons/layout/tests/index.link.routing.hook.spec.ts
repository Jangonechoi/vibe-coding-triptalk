import { test, expect } from "@playwright/test";
import { URL_PATHS } from "@/commons/constants/url";

test.describe("Layout header link routing", () => {
  test("logo click navigates to boards list", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("layout-header-ready").waitFor();
    await page.getByTestId("layout-header-logo").click();
    await page.waitForURL(`**${URL_PATHS.BOARDS.LIST}`);
    expect(page.url()).toContain(URL_PATHS.BOARDS.LIST);
  });

  test("tap '트립토크' navigates to boards list", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("layout-header-ready").waitFor();
    await page.getByTestId("layout-nav-triptalk").click();
    await page.waitForURL(`**${URL_PATHS.BOARDS.LIST}`);
    expect(page.url()).toContain(URL_PATHS.BOARDS.LIST);
  });

  test("login button navigates to login page", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("layout-header-ready").waitFor();
    await page.getByTestId("layout-login-button").click();
    await page.waitForURL(`**${URL_PATHS.AUTH.LOGIN}`);
    expect(page.url()).toContain(URL_PATHS.AUTH.LOGIN);
  });

  test("boards write button navigates to boards new page", async ({ page }) => {
    await page.goto(URL_PATHS.BOARDS.LIST);
    await page.getByTestId("boards-list-ready").waitFor();
    await page.getByTestId("boards-write-button").click();
    await page.waitForURL(`**${URL_PATHS.BOARDS.NEW}`);
    expect(page.url()).toContain(URL_PATHS.BOARDS.NEW);
  });
});
