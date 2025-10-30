"use client";

import React from "react";
import { cn } from "@/commons/utils/cn";
import styles from "./styles.module.css";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  className?: string;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = "primary",
  size = "medium",
  theme = "light",
  className,
  showFirstLast = true,
  maxVisiblePages = 5,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div
      className={cn(
        styles.pagination,
        styles[`pagination--${variant}`],
        styles[`pagination--${size}`],
        styles[`pagination--${theme}`],
        className
      )}
    >
      {/* Previous Button */}
      {showFirstLast && (
        <button
          className={cn(
            styles.paginationButton,
            styles.paginationButtonNav,
            !showPrevious && styles.paginationButtonDisabled
          )}
          onClick={handlePrevious}
          disabled={!showPrevious}
          aria-label="이전 페이지"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Page Numbers */}
      <div className={styles.paginationPages}>
        {visiblePages.map((page) => (
          <button
            key={page}
            className={cn(
              styles.paginationButton,
              styles.paginationButtonPage,
              page === currentPage && styles.paginationButtonActive
            )}
            onClick={() => handlePageChange(page)}
            aria-label={`페이지 ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      {showFirstLast && (
        <button
          className={cn(
            styles.paginationButton,
            styles.paginationButtonNav,
            !showNext && styles.paginationButtonDisabled
          )}
          onClick={handleNext}
          disabled={!showNext}
          aria-label="다음 페이지"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
