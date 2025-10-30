import type { Meta, StoryObj } from "@storybook/react";
import { Searchbar } from "./index";

const meta: Meta<typeof Searchbar> = {
  title: "Components/Searchbar",
  component: Searchbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 variant, size, theme를 지원하는 Searchbar 컴포넌트입니다. 검색 아이콘과 클리어 버튼이 포함되어 있습니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "Searchbar의 스타일 variant",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Searchbar의 크기",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Searchbar의 테마",
    },
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더 텍스트",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
    },
    showClearButton: {
      control: { type: "boolean" },
      description: "클리어 버튼 표시 여부",
    },
    onSearch: {
      action: "search",
      description: "검색 이벤트 핸들러",
    },
    onClear: {
      action: "clear",
      description: "클리어 이벤트 핸들러",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Searchbar
export const Default: Story = {
  args: {
    placeholder: "제목을 검색해 주세요.",
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: "primary",
    placeholder: "Primary 스타일 검색",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    placeholder: "Secondary 스타일 검색",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    placeholder: "Tertiary 스타일 검색",
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small 크기 검색",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    placeholder: "Medium 크기 검색",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Large 크기 검색",
  },
};

// Theme 스토리들
export const Light: Story = {
  args: {
    theme: "light",
    placeholder: "Light 테마 검색",
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
    placeholder: "Dark 테마 검색",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    placeholder: "비활성화된 검색",
    disabled: true,
  },
};

// 클리어 버튼이 없는 상태
export const WithoutClearButton: Story = {
  args: {
    placeholder: "클리어 버튼 없는 검색",
    showClearButton: false,
  },
};

// 커스텀 아이콘이 있는 상태
export const WithCustomIcons: Story = {
  args: {
    placeholder: "커스텀 아이콘 검색",
    leftIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
          fill="currentColor"
        />
      </svg>
    ),
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

// 조합 스토리들
export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "large",
    placeholder: "Primary Large 검색",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    placeholder: "Secondary Small 검색",
  },
};

export const TertiaryDark: Story = {
  args: {
    variant: "tertiary",
    theme: "dark",
    placeholder: "Tertiary Dark 검색",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

// Dark theme variants
export const DarkPrimary: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    placeholder: "Dark Primary 검색",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkSecondary: Story = {
  args: {
    variant: "secondary",
    theme: "dark",
    placeholder: "Dark Secondary 검색",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkTertiary: Story = {
  args: {
    variant: "tertiary",
    theme: "dark",
    placeholder: "Dark Tertiary 검색",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// 모든 variant를 한 번에 보여주는 스토리
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <Searchbar variant="primary" placeholder="Primary 검색" />
      <Searchbar variant="secondary" placeholder="Secondary 검색" />
      <Searchbar variant="tertiary" placeholder="Tertiary 검색" />
    </div>
  ),
};

// 모든 size를 한 번에 보여주는 스토리
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <Searchbar size="small" placeholder="Small 크기 검색" />
      <Searchbar size="medium" placeholder="Medium 크기 검색" />
      <Searchbar size="large" placeholder="Large 크기 검색" />
    </div>
  ),
};

// Light/Dark 테마 비교
export const ThemeComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <div>
        <h3
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}
        >
          Light Theme
        </h3>
        <Searchbar theme="light" placeholder="Light 테마 검색" />
      </div>
      <div
        style={{ background: "#1a1a1a", padding: "16px", borderRadius: "8px" }}
      >
        <h3
          style={{
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: "500",
            color: "white",
          }}
        >
          Dark Theme
        </h3>
        <Searchbar theme="dark" placeholder="Dark 테마 검색" />
      </div>
    </div>
  ),
};

// 다양한 상태를 보여주는 그룹
export const States: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <div>
        <h3
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}
        >
          기본 상태
        </h3>
        <Searchbar placeholder="기본 검색 필드" />
      </div>
      <div>
        <h3
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}
        >
          포커스 상태
        </h3>
        <Searchbar placeholder="포커스된 검색 필드" autoFocus />
      </div>
      <div>
        <h3
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}
        >
          채워진 상태
        </h3>
        <Searchbar placeholder="채워진 검색 필드" defaultValue="검색어" />
      </div>
      <div>
        <h3
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "500" }}
        >
          비활성화 상태
        </h3>
        <Searchbar placeholder="비활성화된 검색 필드" disabled />
      </div>
    </div>
  ),
};

// 모든 기능이 포함된 Searchbar
export const AllFeatures: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "모든 기능이 포함된 검색",
    showClearButton: true,
    onSearch: (value) => console.log("검색:", value),
    onClear: () => console.log("클리어"),
  },
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div
      style={{
        width: "600px",
        padding: "24px",
        background: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}>
        여행 검색
      </h2>
      <p style={{ marginBottom: "24px", color: "#666", fontSize: "14px" }}>
        원하는 여행지를 검색해보세요
      </p>
      <Searchbar
        variant="primary"
        size="large"
        placeholder="여행지를 검색하세요 (예: 파리, 도쿄, 뉴욕)"
        onSearch={(value) => alert(`"${value}" 검색 결과를 보여드립니다.`)}
      />
    </div>
  ),
};
