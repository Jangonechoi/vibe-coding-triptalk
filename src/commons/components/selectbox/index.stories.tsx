import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./index";

const meta: Meta<typeof SelectBox> = {
  title: "Components/SelectBox",
  component: SelectBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 variant, size, theme를 지원하는 SelectBox 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "SelectBox의 스타일 variant",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "SelectBox의 크기",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "SelectBox의 테마",
    },
    label: {
      control: { type: "text" },
      description: "SelectBox의 라벨 텍스트",
    },
    required: {
      control: { type: "boolean" },
      description: "필수 선택 여부",
    },
    error: {
      control: { type: "text" },
      description: "에러 메시지",
    },
    helperText: {
      control: { type: "text" },
      description: "도움말 텍스트",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
    },
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더 텍스트",
    },
    value: {
      control: { type: "text" },
      description: "선택된 값",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 옵션 데이터
const defaultOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
  { value: "option4", label: "옵션 4" },
  { value: "option5", label: "옵션 5" },
];

const countryOptions = [
  { value: "kr", label: "대한민국" },
  { value: "us", label: "미국" },
  { value: "jp", label: "일본" },
  { value: "cn", label: "중국" },
  { value: "gb", label: "영국" },
  { value: "fr", label: "프랑스" },
  { value: "de", label: "독일" },
];

const disabledOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2", disabled: true },
  { value: "option3", label: "옵션 3" },
  { value: "option4", label: "옵션 4", disabled: true },
  { value: "option5", label: "옵션 5" },
];

// 기본 SelectBox
export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: "옵션을 선택하세요",
  },
};

// 라벨이 있는 SelectBox
export const WithLabel: Story = {
  args: {
    label: "국가",
    options: countryOptions,
    placeholder: "국가를 선택하세요",
  },
};

// 필수 선택 SelectBox
export const Required: Story = {
  args: {
    label: "카테고리",
    required: true,
    options: defaultOptions,
    placeholder: "카테고리를 선택하세요",
  },
};

// 에러 상태 SelectBox
export const Error: Story = {
  args: {
    label: "국가",
    options: countryOptions,
    placeholder: "국가를 선택하세요",
    error: "국가를 선택해주세요",
  },
};

// 도움말이 있는 SelectBox
export const WithHelperText: Story = {
  args: {
    label: "언어",
    options: [
      { value: "ko", label: "한국어" },
      { value: "en", label: "English" },
      { value: "ja", label: "日本語" },
      { value: "zh", label: "中文" },
    ],
    placeholder: "언어를 선택하세요",
    helperText: "사용할 언어를 선택해주세요",
  },
};

// 비활성화 상태 SelectBox
export const Disabled: Story = {
  args: {
    label: "비활성화된 선택",
    options: defaultOptions,
    placeholder: "선택할 수 없습니다",
    disabled: true,
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary SelectBox",
    options: defaultOptions,
    placeholder: "Primary 스타일",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary SelectBox",
    options: defaultOptions,
    placeholder: "Secondary 스타일",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Tertiary SelectBox",
    options: defaultOptions,
    placeholder: "Tertiary 스타일",
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    size: "small",
    label: "Small SelectBox",
    options: defaultOptions,
    placeholder: "Small 크기",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium SelectBox",
    options: defaultOptions,
    placeholder: "Medium 크기",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large SelectBox",
    options: defaultOptions,
    placeholder: "Large 크기",
  },
};

// Theme 스토리들
export const Light: Story = {
  args: {
    theme: "light",
    label: "Light Theme",
    options: defaultOptions,
    placeholder: "Light 테마",
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
    label: "Dark Theme",
    options: defaultOptions,
    placeholder: "Dark 테마",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

// 선택된 값이 있는 SelectBox
export const WithValue: Story = {
  args: {
    label: "선택된 값",
    options: defaultOptions,
    value: "option2",
    placeholder: "값을 선택하세요",
  },
};

// 비활성화된 옵션이 있는 SelectBox
export const WithDisabledOptions: Story = {
  args: {
    label: "일부 옵션 비활성화",
    options: disabledOptions,
    placeholder: "옵션을 선택하세요",
  },
};

// 모든 옵션이 적용된 SelectBox
export const AllFeatures: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    label: "완전한 SelectBox",
    required: true,
    options: countryOptions,
    placeholder: "모든 기능이 포함된 SelectBox",
    helperText: "이 SelectBox는 모든 기능을 보여줍니다",
  },
};

// 다양한 상태를 보여주는 그룹
export const States: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "400px",
      }}
    >
      <SelectBox
        label="기본 상태"
        options={defaultOptions}
        placeholder="기본 선택 필드"
      />
      <SelectBox
        label="에러 상태"
        options={defaultOptions}
        placeholder="에러가 있는 선택 필드"
        error="이 필드는 필수입니다"
      />
      <SelectBox
        label="비활성화 상태"
        options={defaultOptions}
        placeholder="비활성화된 선택 필드"
        disabled
      />
      <SelectBox
        label="선택된 상태"
        options={defaultOptions}
        value="option2"
        placeholder="선택된 값이 있는 필드"
      />
    </div>
  ),
};

// 다양한 크기를 보여주는 그룹
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <SelectBox
        size="small"
        label="Small"
        options={defaultOptions}
        placeholder="Small 크기 선택 필드"
      />
      <SelectBox
        size="medium"
        label="Medium"
        options={defaultOptions}
        placeholder="Medium 크기 선택 필드"
      />
      <SelectBox
        size="large"
        label="Large"
        options={defaultOptions}
        placeholder="Large 크기 선택 필드"
      />
    </div>
  ),
};

// 다양한 variant를 보여주는 그룹
export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <SelectBox
        variant="primary"
        label="Primary"
        options={defaultOptions}
        placeholder="Primary variant"
      />
      <SelectBox
        variant="secondary"
        label="Secondary"
        options={defaultOptions}
        placeholder="Secondary variant"
      />
      <SelectBox
        variant="tertiary"
        label="Tertiary"
        options={defaultOptions}
        placeholder="Tertiary variant"
      />
    </div>
  ),
};

// Dark theme variants
export const DarkPrimary: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    label: "Dark Primary SelectBox",
    options: defaultOptions,
    placeholder: "Dark Primary 스타일",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkSecondary: Story = {
  args: {
    variant: "secondary",
    theme: "dark",
    label: "Dark Secondary SelectBox",
    options: defaultOptions,
    placeholder: "Dark Secondary 스타일",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkTertiary: Story = {
  args: {
    variant: "tertiary",
    theme: "dark",
    label: "Dark Tertiary SelectBox",
    options: defaultOptions,
    placeholder: "Dark Tertiary 스타일",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// 모든 variant를 한 번에 보여주는 스토리
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <SelectBox
        variant="primary"
        options={defaultOptions}
        placeholder="Primary"
      />
      <SelectBox
        variant="secondary"
        options={defaultOptions}
        placeholder="Secondary"
      />
      <SelectBox
        variant="tertiary"
        options={defaultOptions}
        placeholder="Tertiary"
      />
    </div>
  ),
};

// 모든 size를 한 번에 보여주는 스토리
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <SelectBox size="small" options={defaultOptions} placeholder="Small" />
      <SelectBox size="medium" options={defaultOptions} placeholder="Medium" />
      <SelectBox size="large" options={defaultOptions} placeholder="Large" />
    </div>
  ),
};

// 실제 사용 예시들
export const CountrySelector: Story = {
  args: {
    label: "국가 선택",
    required: true,
    options: countryOptions,
    placeholder: "국가를 선택하세요",
    helperText: "여행할 국가를 선택해주세요",
  },
};

export const LanguageSelector: Story = {
  args: {
    label: "언어 설정",
    options: [
      { value: "ko", label: "한국어" },
      { value: "en", label: "English" },
      { value: "ja", label: "日本語" },
      { value: "zh", label: "中文" },
      { value: "es", label: "Español" },
      { value: "fr", label: "Français" },
    ],
    placeholder: "언어를 선택하세요",
  },
};

export const CategorySelector: Story = {
  args: {
    label: "카테고리",
    options: [
      { value: "food", label: "음식" },
      { value: "culture", label: "문화" },
      { value: "nature", label: "자연" },
      { value: "history", label: "역사" },
      { value: "shopping", label: "쇼핑" },
      { value: "entertainment", label: "엔터테인먼트" },
    ],
    placeholder: "카테고리를 선택하세요",
  },
};
