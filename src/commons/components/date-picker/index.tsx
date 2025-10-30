import React, { forwardRef, useState } from "react";
import { cn } from "@/commons/utils/cn";
import styles from "./styles.module.css";

export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange"> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  value?: {
    startDate: string;
    endDate: string;
  };
  onChange?: (value: { startDate: string; endDate: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      variant = "primary",
      size = "medium",
      theme = "light",
      label,
      required = false,
      error,
      helperText,
      disabled = false,
      value,
      onChange,
      onFocus,
      onBlur,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(
      value || { startDate: "", endDate: "" }
    );

    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    const handleDateChange = (
      type: "startDate" | "endDate",
      newValue: string
    ) => {
      const updatedValue = {
        ...internalValue,
        [type]: newValue,
      };
      setInternalValue(updatedValue);
      onChange?.(updatedValue);
    };

    const containerClasses = cn(
      styles.datePicker,
      styles[`datePicker--${variant}`],
      styles[`datePicker--${size}`],
      styles[`datePicker--${theme}`],
      {
        [styles["datePicker--focused"]]: isFocused,
        [styles["datePicker--error"]]: !!error,
        [styles["datePicker--disabled"]]: disabled,
        [styles["datePicker--filled"]]:
          !!internalValue.startDate || !!internalValue.endDate,
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

    const inputClasses = cn(
      styles.input,
      styles[`input--${size}`],
      styles[`input--${theme}`],
      {
        [styles["input--disabled"]]: disabled,
      }
    );

    return (
      <div className={styles.datePickerWrapper} ref={ref} {...props}>
        {label && (
          <div className={styles.labelContainer}>
            <label className={labelClasses}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          </div>
        )}

        <div className={containerClasses}>
          {/* 캘린더 아이콘 */}
          <div className={styles.iconContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.calendarIcon}
            >
              <path
                d="M19 3H18V1C18 0.45 17.55 0 17 0C16.45 0 16 0.45 16 1V3H8V1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"
                fill="currentColor"
              />
              <path
                d="M7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10ZM7 14H9V16H7V14ZM11 14H13V16H11V14ZM15 14H17V16H15V14Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* 날짜 입력 영역 */}
          <div className={styles.dateInputContainer}>
            <div className={styles.dateRangeContainer}>
              {/* 시작 날짜 */}
              <div className={styles.dateInputGroup}>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="YYYY"
                  value={internalValue.startDate.split(".")[0] || ""}
                  onChange={(e) => {
                    const year = e.target.value.replace(/\D/g, "").slice(0, 4);
                    const rest = internalValue.startDate
                      .split(".")
                      .slice(1)
                      .join(".");
                    handleDateChange(
                      "startDate",
                      year + (rest ? "." + rest : "")
                    );
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  maxLength={4}
                />
                <span className={styles.separator}>.</span>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="MM"
                  value={internalValue.startDate.split(".")[1] || ""}
                  onChange={(e) => {
                    const month = e.target.value.replace(/\D/g, "").slice(0, 2);
                    const parts = internalValue.startDate.split(".");
                    const year = parts[0] || "";
                    const day = parts[2] || "";
                    handleDateChange(
                      "startDate",
                      year + (month ? "." + month : "") + (day ? "." + day : "")
                    );
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  maxLength={2}
                />
                <span className={styles.separator}>.</span>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="DD"
                  value={internalValue.startDate.split(".")[2] || ""}
                  onChange={(e) => {
                    const day = e.target.value.replace(/\D/g, "").slice(0, 2);
                    const parts = internalValue.startDate.split(".");
                    const year = parts[0] || "";
                    const month = parts[1] || "";
                    handleDateChange(
                      "startDate",
                      year + (month ? "." + month : "") + (day ? "." + day : "")
                    );
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  maxLength={2}
                />
              </div>

              {/* 구분자 */}
              <span className={styles.rangeSeparator}>-</span>

              {/* 종료 날짜 */}
              <div className={styles.dateInputGroup}>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="YYYY"
                  value={internalValue.endDate.split(".")[0] || ""}
                  onChange={(e) => {
                    const year = e.target.value.replace(/\D/g, "").slice(0, 4);
                    const rest = internalValue.endDate
                      .split(".")
                      .slice(1)
                      .join(".");
                    handleDateChange(
                      "endDate",
                      year + (rest ? "." + rest : "")
                    );
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  maxLength={4}
                />
                <span className={styles.separator}>.</span>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="MM"
                  value={internalValue.endDate.split(".")[1] || ""}
                  onChange={(e) => {
                    const month = e.target.value.replace(/\D/g, "").slice(0, 2);
                    const parts = internalValue.endDate.split(".");
                    const year = parts[0] || "";
                    const day = parts[2] || "";
                    handleDateChange(
                      "endDate",
                      year + (month ? "." + month : "") + (day ? "." + day : "")
                    );
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  maxLength={2}
                />
                <span className={styles.separator}>.</span>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="DD"
                  value={internalValue.endDate.split(".")[2] || ""}
                  onChange={(e) => {
                    const day = e.target.value.replace(/\D/g, "").slice(0, 2);
                    const parts = internalValue.endDate.split(".");
                    const year = parts[0] || "";
                    const month = parts[1] || "";
                    handleDateChange(
                      "endDate",
                      year + (month ? "." + month : "") + (day ? "." + day : "")
                    );
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  maxLength={2}
                />
              </div>
            </div>
          </div>
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

DatePicker.displayName = "DatePicker";
