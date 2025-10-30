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
    title: { control: "text" },
    description: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["info", "danger"],
    },
    actions: {
      control: { type: "inline-radio" },
      options: ["single", "dual"],
    },
    theme: {
      control: { type: "inline-radio" },
      options: ["light", "dark"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium"],
    },
    confirmText: { control: "text" },
    cancelText: { control: "text" },
    className: { control: false },
    onClose: { action: "onClose" },
    onConfirm: { action: "onConfirm" },
    onCancel: { action: "onCancel" },
  },
  args: {
    title: "안내",
    description: "이 작업을 진행하시겠습니까?",
    variant: "info",
    actions: "dual",
    theme: "light",
    size: "medium",
    confirmText: "확인",
    cancelText: "취소",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DangerDual: Story = {
  args: {
    title: "삭제 경고",
    description: "삭제한 내용은 되돌릴 수 없습니다.",
    variant: "danger",
    actions: "dual",
    confirmText: "삭제",
    cancelText: "취소",
  },
};

export const InfoSingle: Story = {
  args: {
    title: "완료",
    description: "작업이 성공적으로 완료되었습니다.",
    variant: "info",
    actions: "single",
    confirmText: "확인",
  },
};

export const DarkTheme: Story = {
  args: {
    title: "다크 테마",
    description: "다크 테마에서의 모달 예시입니다.",
    theme: "dark",
  },
};

export const SmallSize: Story = {
  args: {
    title: "작은 사이즈",
    description: "small 사이즈 가이드에 맞춘 모달입니다.",
    size: "small",
  },
};
