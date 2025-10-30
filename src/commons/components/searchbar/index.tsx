import React, { forwardRef, useState } from "react";
import { cn } from "@/commons/utils/cn";
import styles from "./styles.module.css";

export interface SearchbarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  placeholder?: string;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Searchbar = forwardRef<HTMLInputElement, SearchbarProps>(
  (
    {
      variant = "primary",
      size = "medium",
      theme = "light",
      placeholder = "제목을 검색해 주세요.",
      onSearch,
      onClear,
      showClearButton = true,
      leftIcon,
      rightIcon,
      className,
      value,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.(String(inputValue));
      }
    };

    const handleClear = () => {
      setInputValue("");
      onClear?.();
    };

    const searchbarClasses = cn(
      styles.searchbar,
      styles[`searchbar--${variant}`],
      styles[`searchbar--${size}`],
      styles[`searchbar--${theme}`],
      {
        [styles["searchbar--focused"]]: isFocused,
        [styles["searchbar--filled"]]: !!inputValue,
        [styles["searchbar--disabled"]]: props.disabled,
      },
      className
    );

    const inputClasses = cn(
      styles.input,
      styles[`input--${size}`],
      styles[`input--${theme}`]
    );

    const defaultLeftIcon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.searchIcon}
      >
        <path
          d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
          fill="currentColor"
        />
      </svg>
    );

    const defaultRightIcon = inputValue && showClearButton && (
      <button
        type="button"
        className={styles.clearButton}
        onClick={handleClear}
        aria-label="검색어 지우기"
      >
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
      </button>
    );

    return (
      <div className={searchbarClasses}>
        <div className={styles.searchbarContainer}>
          {leftIcon || defaultLeftIcon}

          <input
            ref={ref}
            type="text"
            className={inputClasses}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            {...props}
          />

          {rightIcon || defaultRightIcon}
        </div>
      </div>
    );
  }
);

Searchbar.displayName = "Searchbar";
