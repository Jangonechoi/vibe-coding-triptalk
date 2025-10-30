import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    isOpen: true,
    children: "Modal Content",
  },
};

// 닫힌 상태
export const Closed: Story = {
  args: {
    isOpen: false,
    children: "Modal Content",
  },
};
