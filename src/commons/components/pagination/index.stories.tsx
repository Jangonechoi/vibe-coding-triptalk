import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination, PaginationProps } from "./index";

// Interactive Pagination Component
const InteractivePagination = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        args.onPageChange?.(page);
      }}
    />
  );
};

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "페이지네이션 컴포넌트입니다. 다양한 변형과 크기, 테마를 지원합니다.",
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "현재 페이지 번호",
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "전체 페이지 수",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "페이지네이션 스타일 변형",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "페이지네이션 크기",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "테마 (라이트/다크)",
    },
    showFirstLast: {
      control: { type: "boolean" },
      description: "첫 페이지/마지막 페이지 버튼 표시 여부",
    },
    maxVisiblePages: {
      control: { type: "number", min: 3, max: 10 },
      description: "최대 표시 페이지 수",
    },
    onPageChange: {
      action: "page changed",
      description: "페이지 변경 이벤트 핸들러",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// 기본 스토리
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 다양한 페이지 수 스토리
export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 크기 변형 스토리
export const Small: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "primary",
    size: "small",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

export const Large: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "primary",
    size: "large",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 스타일 변형 스토리
export const Secondary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "secondary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

export const Tertiary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "tertiary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 다크 테마 스토리
export const DarkTheme: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "primary",
    size: "medium",
    theme: "dark",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <InteractivePagination {...args} />
    </div>
  ),
};

export const DarkSecondary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "secondary",
    size: "medium",
    theme: "dark",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <InteractivePagination {...args} />
    </div>
  ),
};

export const DarkTertiary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "tertiary",
    size: "medium",
    theme: "dark",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <InteractivePagination {...args} />
    </div>
  ),
};

// 네비게이션 버튼 없음 스토리
export const WithoutNavigation: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: false,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 최대 표시 페이지 수 제한 스토리
export const LimitedVisiblePages: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 3,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 첫 페이지 스토리
export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 마지막 페이지 스토리
export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    variant: "primary",
    size: "medium",
    theme: "light",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  render: (args) => <InteractivePagination {...args} />,
};

// 모든 변형 비교 스토리
const AllVariantsComponent = () => {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Primary Variant
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          variant="primary"
          size="medium"
          theme="light"
          showFirstLast={true}
          maxVisiblePages={5}
          onPageChange={setCurrentPage}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Secondary Variant
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          variant="secondary"
          size="medium"
          theme="light"
          showFirstLast={true}
          maxVisiblePages={5}
          onPageChange={setCurrentPage}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Tertiary Variant
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          variant="tertiary"
          size="medium"
          theme="light"
          showFirstLast={true}
          maxVisiblePages={5}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  render: () => <AllVariantsComponent />,
};

// 모든 크기 비교 스토리
const AllSizesComponent = () => {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Small Size
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          variant="primary"
          size="small"
          theme="light"
          showFirstLast={true}
          maxVisiblePages={5}
          onPageChange={setCurrentPage}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Medium Size
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          variant="primary"
          size="medium"
          theme="light"
          showFirstLast={true}
          maxVisiblePages={5}
          onPageChange={setCurrentPage}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Large Size
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          variant="primary"
          size="large"
          theme="light"
          showFirstLast={true}
          maxVisiblePages={5}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export const AllSizes: Story = {
  render: () => <AllSizesComponent />,
};
