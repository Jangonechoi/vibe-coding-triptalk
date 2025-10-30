import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 variant, size, theme를 지원하는 Input 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "Input의 스타일 variant",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Input의 크기",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Input의 테마",
    },
    label: {
      control: { type: "text" },
      description: "Input의 라벨 텍스트",
    },
    required: {
      control: { type: "boolean" },
      description: "필수 입력 여부",
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
    isTextarea: {
      control: { type: "boolean" },
      description: "Textarea 모드",
    },
    maxLength: {
      control: { type: "number" },
      description: "최대 입력 길이",
    },
    showCount: {
      control: { type: "boolean" },
      description: "글자 수 표시 여부",
    },
    buttonText: {
      control: { type: "text" },
      description: "버튼 텍스트",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Input
export const Default: Story = {
  args: {
    placeholder: "기본 입력 필드",
  },
};

// 라벨이 있는 Input
export const WithLabel: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
  },
};

// 필수 입력 Input
export const Required: Story = {
  args: {
    label: "비밀번호",
    required: true,
    placeholder: "비밀번호를 입력하세요",
  },
};

// 에러 상태 Input
export const Error: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
    error: "올바른 이메일 형식을 입력해주세요",
  },
};

// 도움말이 있는 Input
export const WithHelperText: Story = {
  args: {
    label: "사용자명",
    placeholder: "사용자명을 입력하세요",
    helperText: "영문, 숫자, 언더스코어만 사용 가능합니다",
  },
};

// 비활성화 상태 Input
export const Disabled: Story = {
  args: {
    label: "비활성화된 필드",
    placeholder: "입력할 수 없습니다",
    disabled: true,
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Input",
    placeholder: "Primary 스타일",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Input",
    placeholder: "Secondary 스타일",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Tertiary Input",
    placeholder: "Tertiary 스타일",
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    size: "small",
    label: "Small Input",
    placeholder: "Small 크기",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium Input",
    placeholder: "Medium 크기",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Input",
    placeholder: "Large 크기",
  },
};

// Theme 스토리들
export const Light: Story = {
  args: {
    theme: "light",
    label: "Light Theme",
    placeholder: "Light 테마",
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
    label: "Dark Theme",
    placeholder: "Dark 테마",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

// Textarea
export const Textarea: Story = {
  args: {
    isTextarea: true,
    label: "메시지",
    placeholder: "메시지를 입력하세요",
  },
};

// 글자 수 제한이 있는 Input
export const WithMaxLength: Story = {
  args: {
    label: "제목",
    placeholder: "제목을 입력하세요",
    maxLength: 50,
    showCount: true,
  },
};

// 버튼이 있는 Input
export const WithButton: Story = {
  args: {
    label: "검색",
    placeholder: "검색어를 입력하세요",
    buttonText: "검색",
    onButtonClick: () => alert("검색 버튼 클릭!"),
  },
};

// 아이콘이 있는 Input
export const WithIcons: Story = {
  args: {
    label: "검색",
    placeholder: "검색어를 입력하세요",
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    ),
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
  },
};

// 모든 옵션이 적용된 Input
export const AllFeatures: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    label: "완전한 Input",
    required: true,
    placeholder: "모든 기능이 포함된 Input",
    helperText: "이 Input은 모든 기능을 보여줍니다",
    maxLength: 100,
    showCount: true,
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    buttonText: "확인",
    onButtonClick: () => alert("확인 버튼 클릭!"),
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
      <Input label="기본 상태" placeholder="기본 입력 필드" />
      <Input label="포커스 상태" placeholder="포커스된 입력 필드" autoFocus />
      <Input
        label="에러 상태"
        placeholder="에러가 있는 입력 필드"
        error="이 필드는 필수입니다"
      />
      <Input
        label="비활성화 상태"
        placeholder="비활성화된 입력 필드"
        disabled
      />
      <Input
        label="채워진 상태"
        placeholder="채워진 입력 필드"
        defaultValue="이미 입력된 값"
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
      <Input size="small" label="Small" placeholder="Small 크기 입력 필드" />
      <Input size="medium" label="Medium" placeholder="Medium 크기 입력 필드" />
      <Input size="large" label="Large" placeholder="Large 크기 입력 필드" />
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
      <Input variant="primary" label="Primary" placeholder="Primary variant" />
      <Input
        variant="secondary"
        label="Secondary"
        placeholder="Secondary variant"
      />
      <Input
        variant="tertiary"
        label="Tertiary"
        placeholder="Tertiary variant"
      />
    </div>
  ),
};
