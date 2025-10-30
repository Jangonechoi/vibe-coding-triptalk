import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./index";

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: "Layout Content",
  },
};

// 빈 레이아웃
export const Empty: Story = {
  args: {
    children: "",
  },
};
