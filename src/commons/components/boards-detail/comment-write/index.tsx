"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/commons/components/input";
import styles from "./styles.module.css";

interface CommentWriteProps {
  isEdit?: boolean;
  initialAuthor?: string;
  initialPassword?: string;
  initialContent?: string;
  initialRating?: number;
  onSubmit: (data: {
    author: string;
    password: string;
    content: string;
    rating: number;
  }) => void;
  onCancel?: () => void;
}

const CommentWrite: React.FC<CommentWriteProps> = ({
  isEdit = false,
  initialAuthor = "",
  initialPassword = "",
  initialContent = "",
  initialRating = 5,
  onSubmit,
  onCancel,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [author, setAuthor] = useState(initialAuthor);
  const [password, setPassword] = useState(initialPassword);
  const [content, setContent] = useState(initialContent);

  // initial 값이 변경될 때 state 업데이트
  useEffect(() => {
    setRating(initialRating);
    setAuthor(initialAuthor);
    setPassword(initialPassword);
    setContent(initialContent);
  }, [initialAuthor, initialPassword, initialContent, initialRating]);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (!author.trim() || !password.trim() || !content.trim()) {
      alert("작성자, 비밀번호, 댓글 내용을 모두 입력해주세요.");
      return;
    }
    onSubmit({ author, password, content, rating });
  };

  const handleCancel = () => {
    // 초기화
    setRating(5);
    setAuthor("");
    setPassword("");
    setContent("");

    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className={styles.container}>
      {/* 별점 영역 */}
      <div className={styles.starRating}>
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            className={styles.starButton}
            onClick={() => handleStarClick(index)}
            type="button"
          >
            <Image
              src="/icons/filled/star.svg"
              alt="별점"
              width={24}
              height={24}
              className={`${styles.star} ${
                index < rating ? styles.starFilled : styles.starEmpty
              }`}
            />
          </button>
        ))}
      </div>

      {/* 작성자와 비밀번호 입력 영역 */}
      <div className={styles.authorPasswordArea}>
        <div className={styles.authorInput}>
          <Input
            label="작성자"
            required
            placeholder={isEdit ? author : "작성자 명을 입력해 주세요."}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            variant="primary"
            theme="light"
            size="medium"
            disabled={isEdit}
          />
        </div>
        <div className={styles.passwordInput}>
          <Input
            label="비밀번호"
            required
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="primary"
            theme="light"
            size="medium"
          />
        </div>
      </div>

      {/* 댓글 입력 영역 */}
      <div className={styles.commentInputArea}>
        <div className={styles.commentInput}>
          <Input
            isTextarea
            placeholder="댓글을 입력해 주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="primary"
            theme="light"
            size="large"
            maxLength={100}
            showCount
          />
        </div>

        {/* 버튼 영역 */}
        <div className={styles.buttonArea}>
          <button
            className={styles.cancelButton}
            onClick={handleCancel}
            type="button"
          >
            취소
          </button>
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            type="button"
          >
            {isEdit ? "수정하기" : "댓글 등록"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentWrite;
