import React from "react";
import { cn } from "@/commons/utils/cn";
import styles from "./styles.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      theme = "light",
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.button,
          styles[`button--${variant}`],
          styles[`button--${size}`],
          styles[`button--${theme}`],
          disabled && styles["button--disabled"],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {leftIcon && (
          <span className={styles.button__leftIcon}>{leftIcon}</span>
        )}
        <span className={styles.button__label}>{children}</span>
        {rightIcon && (
          <span className={styles.button__rightIcon}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
