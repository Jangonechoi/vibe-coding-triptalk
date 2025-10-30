import React, { forwardRef, useState } from "react";
import { cn } from "@/commons/utils/cn";
import styles from "./styles.module.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  isTextarea?: boolean;
  maxLength?: number;
  showCount?: boolean;
}

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      variant = "primary",
      size = "medium",
      theme = "light",
      label,
      required = false,
      error,
      helperText,
      leftIcon,
      rightIcon,
      buttonText,
      onButtonClick,
      isTextarea = false,
      maxLength,
      showCount = false,
      className,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(e as React.ChangeEvent<HTMLInputElement>);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const inputClasses = cn(
      styles.input,
      styles[`input--${variant}`],
      styles[`input--${size}`],
      styles[`input--${theme}`],
      {
        [styles["input--focused"]]: isFocused,
        [styles["input--error"]]: !!error,
        [styles["input--disabled"]]: props.disabled,
        [styles["input--filled"]]: !!inputValue,
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

    const inputContainerClasses = cn(
      styles.inputContainer,
      styles[`inputContainer--${size}`],
      {
        [styles["inputContainer--error"]]: !!error,
        [styles["inputContainer--focused"]]: isFocused,
        [styles["inputContainer--disabled"]]: props.disabled,
      }
    );

    const renderInput = () => {
      if (isTextarea) {
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={maxLength}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        );
      }

      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={inputClasses}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          {...props}
        />
      );
    };

    return (
      <div className={styles.inputWrapper}>
        {label && (
          <div className={styles.labelContainer}>
            <label className={labelClasses}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          </div>
        )}

        <div className={inputContainerClasses}>
          {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

          {renderInput()}

          {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}

          {buttonText && (
            <button
              type="button"
              className={styles.inputButton}
              onClick={onButtonClick}
              disabled={props.disabled}
            >
              {buttonText}
            </button>
          )}
        </div>

        {(error || helperText || (showCount && maxLength)) && (
          <div className={styles.helperContainer}>
            {error && <div className={styles.errorText}>{error}</div>}
            {helperText && !error && (
              <div className={styles.helperText}>{helperText}</div>
            )}
            {showCount && maxLength && (
              <div className={styles.countText}>
                {String(inputValue).length}/{maxLength}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
