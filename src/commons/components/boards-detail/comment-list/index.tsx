"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommentWrite from "../comment-write";
import styles from "./styles.module.css";

interface Comment {
  id: string;
  author: string;
  profileImage: string;
  rating: number;
  content: string;
  date: string;
  isEditable?: boolean;
}

interface CommentListProps {
  comments?: Comment[];
  onCommentEdit?: (
    commentId: string,
    data: {
      author: string;
      password: string;
      content: string;
      rating: number;
    }
  ) => void;
  onCommentDelete?: (commentId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments = [],
  onCommentEdit,
  onCommentDelete,
}) => {
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleEdit = (commentId: string) => {
    setEditingCommentId(commentId);
  };

  const handleEditSubmit = (data: {
    author: string;
    password: string;
    content: string;
    rating: number;
  }) => {
    if (editingCommentId && onCommentEdit) {
      onCommentEdit(editingCommentId, data);
      setEditingCommentId(null);
    }
  };

  const handleEditCancel = () => {
    setEditingCommentId(null);
  };

  const handleDelete = (commentId: string) => {
    if (onCommentDelete) {
      onCommentDelete(commentId);
    }
  };

  const getEditingComment = () => {
    return comments.find((c) => c.id === editingCommentId);
  };

  const editingComment = getEditingComment();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div key={index} className={styles.starIcon}>
        <Image
          src="/icons/filled/star.svg"
          alt="별점"
          width={24}
          height={24}
          className={`${styles.star} ${
            index < rating ? styles.starFilled : styles.starEmpty
          }`}
        />
      </div>
    ));
  };

  if (comments.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.noComment}>등록된 댓글이 없습니다.</p>
      </div>
    );
  }

  // 편집 모드일 때 CommentWrite 표시
  if (editingCommentId && editingComment) {
    return (
      <div className={styles.container}>
        <CommentWrite
          isEdit={true}
          initialAuthor={editingComment.author}
          initialPassword=""
          initialContent={editingComment.content}
          initialRating={editingComment.rating}
          onSubmit={handleEditSubmit}
          onCancel={handleEditCancel}
        />
      </div>
    );
  }

  // 일반 댓글 목록
  return (
    <div className={styles.container}>
      {comments.map((comment, index) => (
        <div key={comment.id} className={styles.commentItem}>
          {/* 프로필 & 별점 & 액션 버튼 영역 */}
          <div className={styles.commentHeader}>
            <div className={styles.profileAndStars}>
              <div className={styles.profileSection}>
                <div className={styles.profileImage}>
                  <Image
                    src={comment.profileImage}
                    alt="프로필"
                    width={24}
                    height={24}
                  />
                </div>
                <span className={styles.authorName}>{comment.author}</span>
              </div>
              <div className={styles.starRating}>
                {renderStars(comment.rating)}
              </div>
            </div>
            {comment.isEditable && (
              <div className={styles.actionButtons}>
                <button
                  className={styles.actionButton}
                  onClick={() => handleEdit(comment.id)}
                >
                  <Image
                    src="/icons/outline/edit.svg"
                    alt="수정"
                    width={20}
                    height={20}
                  />
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => handleDelete(comment.id)}
                >
                  <Image
                    src="/icons/outline/close.svg"
                    alt="삭제"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            )}
          </div>

          {/* 댓글 내용 */}
          <div className={styles.commentContent}>
            <p className={styles.commentText}>{comment.content}</p>
          </div>

          {/* 날짜 */}
          <div className={styles.commentDate}>
            <span className={styles.dateText}>{comment.date}</span>
          </div>

          {/* 구분선 (마지막 댓글 제외) */}
          {index < comments.length - 1 && (
            <div className={styles.commentDivider}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
