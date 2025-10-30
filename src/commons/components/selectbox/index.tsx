import React, { forwardRef, useState, useRef, useEffect } from "react";
import { cn } from "@/commons/utils/cn";
import styles from "./styles.module.css";

export interface SelectBoxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectBoxProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectBoxOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  tabIndex?: number;
}

export const SelectBox = forwardRef<HTMLDivElement, SelectBoxProps>(
  (
    {
      variant = "primary",
      size = "medium",
      theme = "light",
      label,
      required = false,
      error,
      helperText,
      placeholder = "내용입력",
      options,
      value,
      onChange,
      disabled = false,
      className,
      id,
      name,
      tabIndex,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || "");
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    const handleToggle = () => {
      if (disabled) return;
      setIsOpen(!isOpen);
    };

    const handleSelect = (optionValue: string) => {
      if (disabled) return;
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // 키보드 네비게이션
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          handleToggle();
          break;
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowDown":
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          }
          break;
      }
    };

    const selectClasses = cn(
      styles.select,
      styles[`select--${variant}`],
      styles[`select--${size}`],
      styles[`select--${theme}`],
      {
        [styles["select--focused"]]: isFocused,
        [styles["select--error"]]: !!error,
        [styles["select--disabled"]]: disabled,
        [styles["select--filled"]]: !!selectedValue,
        [styles["select--open"]]: isOpen,
      },
      className
    );

    const labelClasses = cn(
      styles.label,
      styles[`label--${size}`],
      styles[`label--${theme}`],
      {
        [styles["label--required"]]: required,
      }
    );

    const listClasses = cn(
      styles.list,
      styles[`list--${size}`],
      styles[`list--${theme}`],
      {
        [styles["list--open"]]: isOpen,
      }
    );

    return (
      <div className={styles.wrapper} ref={ref}>
        {label && (
          <div className={styles.labelContainer}>
            <label className={labelClasses}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          </div>
        )}

        <div className={styles.selectContainer}>
          <div
            ref={selectRef}
            className={selectClasses}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={disabled ? -1 : tabIndex ?? 0}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? "selectbox-list" : undefined}
            aria-label={label}
            id={id}
            data-name={name}
          >
            <div className={styles.selectContent}>
              <span
                className={cn(styles.selectText, {
                  [styles["selectText--placeholder"]]: !selectedValue,
                })}
              >
                {selectedOption?.label || placeholder}
              </span>
              <div
                className={cn(styles.selectIcon, {
                  [styles["selectIcon--open"]]: isOpen,
                })}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {isOpen && (
            <div
              ref={listRef}
              className={listClasses}
              role="listbox"
              id="selectbox-list"
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  className={cn(styles.option, styles[`option--${size}`], {
                    [styles["option--selected"]]:
                      option.value === selectedValue,
                    [styles["option--disabled"]]: option.disabled,
                  })}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  role="option"
                  aria-selected={option.value === selectedValue}
                >
                  <span className={styles.optionText}>{option.label}</span>
                  {option.value === selectedValue && (
                    <div className={styles.optionIcon}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5L6 12L2.5 8.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <div className={styles.helperContainer}>
            {error && <div className={styles.errorText}>{error}</div>}
            {helperText && !error && (
              <div className={styles.helperText}>{helperText}</div>
            )}
          </div>
        )}
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";
