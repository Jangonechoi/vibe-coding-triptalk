"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  content: ReactNode | null;
  setContent: (content: ReactNode | null) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  const value = {
    isOpen,
    openModal,
    closeModal,
    content,
    setContent,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && typeof window !== "undefined" && content && (
        <ModalPortal content={content} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
};

interface ModalPortalProps {
  content: ReactNode;
  onClose: () => void;
}

const ModalPortal = ({ content, onClose }: ModalPortalProps) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative z-10">{content}</div>
    </div>,
    document.body
  );
};
