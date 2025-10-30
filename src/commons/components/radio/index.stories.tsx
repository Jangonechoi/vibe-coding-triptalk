import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./index";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "내용을 입력해 주세요.",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Radio",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Radio",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Tertiary Radio",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Radio",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium Radio",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Radio",
  },
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
    label: "Dark Theme Radio",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Radio",
  },
};

export const Selected: Story = {
  args: {
    defaultChecked: true,
    label: "Selected Radio",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3>Primary Variant</h3>
        <Radio variant="primary" size="small" label="Small Primary" />
        <Radio variant="primary" size="medium" label="Medium Primary" />
        <Radio variant="primary" size="large" label="Large Primary" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3>Secondary Variant</h3>
        <Radio variant="secondary" size="small" label="Small Secondary" />
        <Radio variant="secondary" size="medium" label="Medium Secondary" />
        <Radio variant="secondary" size="large" label="Large Secondary" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3>Tertiary Variant</h3>
        <Radio variant="tertiary" size="small" label="Small Tertiary" />
        <Radio variant="tertiary" size="medium" label="Medium Tertiary" />
        <Radio variant="tertiary" size="large" label="Large Tertiary" />
      </div>
    </div>
  ),
};
