import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    theme: "light",
    children: "Light Theme Button",
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
    children: "Dark Theme Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Disabled 상태
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// 아이콘이 있는 버튼들
export const WithLeftIcon: Story = {
  args: {
    children: "Button with Icon",
    leftIcon: "←",
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Button with Icon",
    rightIcon: "→",
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Button with Icons",
    leftIcon: "←",
    rightIcon: "→",
  },
};

// 조합 스토리들
export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Large Button",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Secondary Small Button",
  },
};

export const TertiaryWithIcon: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary with Icon",
    leftIcon: "★",
  },
};

// Dark theme variants
export const DarkPrimary: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    children: "Dark Primary Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkSecondary: Story = {
  args: {
    variant: "secondary",
    theme: "dark",
    children: "Dark Secondary Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkTertiary: Story = {
  args: {
    variant: "tertiary",
    theme: "dark",
    children: "Dark Tertiary Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// 모든 variant를 한 번에 보여주는 스토리
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  ),
};

// 모든 size를 한 번에 보여주는 스토리
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};
