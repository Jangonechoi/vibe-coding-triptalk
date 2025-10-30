import React from "react";
import styles from "./styles.module.css";
import { Button } from "@/commons/components/button";

type ModalVariant = "info" | "danger";
type ModalActions = "single" | "dual";
type ModalTheme = "light" | "dark";
type ModalSize = "small" | "medium";

interface ModalProps {
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  title: string;
  description?: string;
  variant?: ModalVariant;
  actions?: ModalActions;
  theme?: ModalTheme;
  size?: ModalSize; // 피그마 참조: small | medium
  confirmText?: string;
  cancelText?: string;
  className?: string; // width 전용 커스터마이징 (외부에서만 제어)
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  onConfirm,
  onCancel,
  title,
  description,
  variant = "info",
  actions = "dual",
  theme = "light",
  size = "medium",
  confirmText = "확인",
  cancelText = "취소",
  className,
}) => {
  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={[
        styles.modal,
        styles[`modal--${theme}`],
        styles[`modal--${variant}`],
        styles[`modal--${size}`],
        className || "",
      ].join(" ")}
    >
      <div className={styles.modal__header}>
        <div
          className={[
            styles.modal__icon,
            styles[`modal__icon--${variant}`],
          ].join(" ")}
        />
        <h3 className={styles.modal__title}>{title}</h3>
      </div>

      {description && (
        <p className={styles.modal__description}>{description}</p>
      )}

      <div
        className={[
          styles.modal__actions,
          actions === "dual"
            ? styles["modal__actions--dual"]
            : styles["modal__actions--single"],
        ].join(" ")}
      >
        {actions === "dual" ? (
          <>
            <Button
              variant="secondary"
              theme="light"
              size={size}
              className={styles.modal__actionButton}
              onClick={handleCancel}
            >
              {cancelText}
            </Button>
            <Button
              variant="primary"
              theme="light"
              size={size}
              className={styles.modal__actionButton}
              onClick={handleConfirm}
            >
              {confirmText}
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            theme="light"
            size={size}
            className={styles.modal__actionButton}
            onClick={handleConfirm}
          >
            {confirmText}
          </Button>
        )}
      </div>
    </div>
  );
};
