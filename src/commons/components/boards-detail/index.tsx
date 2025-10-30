"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/commons/components/button";
import CommentList from "./comment-list";
import CommentWrite from "./comment-write";
import styles from "./styles.module.css";

interface BoardsDetailProps {
  id?: string;
}

const BoardsDetail: React.FC<BoardsDetailProps> = ({ id }) => {
  const router = useRouter();
  // 댓글 상태 관리
  const [comments, setComments] = useState([
    {
      id: "1",
      author: "홍길동",
      profileImage: "/images/profiles/Property 1=d.svg",
      rating: 5,
      content:
        "살겠노라 살겠노라. 청산에 살겠노라.\n머루랑 다래를 먹고 청산에 살겠노라.\n얄리얄리 얄랑셩 얄라리 얄라",
      date: "2024.11.11",
      isEditable: true,
    },
    {
      id: "2",
      author: "애슐리",
      profileImage: "/images/profiles/Property 1=h.svg",
      rating: 5,
      content:
        "살겠노라 살겠노라. 청산에 살겠노라.\n머루랑 다래를 먹고 청산에 살겠노라.\n얄리얄리 얄랑셩 얄라리 얄라",
      date: "2024.11.11",
      isEditable: false,
    },
  ]);

  // 댓글 수정 핸들러
  const handleCommentEdit = (
    commentId: string,
    data: { author: string; password: string; content: string; rating: number }
  ) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, content: data.content, rating: data.rating }
          : comment
      )
    );
  };

  // 댓글 삭제 핸들러
  const handleCommentDelete = (commentId: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  // 댓글 등록 핸들러
  const handleCommentSubmit = (data: {
    author: string;
    password: string;
    content: string;
    rating: number;
  }) => {
    const newComment = {
      id: Date.now().toString(),
      author: data.author,
      profileImage: "/images/profiles/Property 1=a.svg",
      rating: data.rating,
      content: data.content,
      date: new Date().toLocaleDateString("ko-KR").replace(/\./g, "."),
      isEditable: true,
    };

    setComments((prev) => [...prev, newComment]);
  };
  return (
    <div className={styles.container}>
      {/* detail-content 영역 */}
      <div className={styles.detailContent}>
        {/* 제목 */}
        <h1 className={styles.title}>
          살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고
          쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라
        </h1>

        {/* 제목과 작성자 정보 사이 gap */}
        <div className={styles.gap24}></div>

        {/* 작성자 정보 */}
        <div className={styles.authorInfo}>
          {/* 프로필과 날짜가 같은 라인에 위치 */}
          <div className={styles.authorTopRow}>
            <div className={styles.profileSection}>
              <div className={styles.profileImage}>
                <Image
                  src="/images/img.png"
                  alt="프로필"
                  width={24}
                  height={24}
                />
              </div>
              <span className={styles.authorName}>홍길동</span>
            </div>
            <div className={styles.dateSection}>
              <span className={styles.date}>2024.11.11</span>
            </div>
          </div>

          {/* 구분선 */}
          <div className={styles.divider}></div>

          {/* 액션 버튼들 */}
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <Image
                src="/icons/outline/link.svg"
                alt="링크"
                width={24}
                height={24}
              />
            </button>
            <button className={styles.actionButton}>
              <Image
                src="/icons/outline/location.svg"
                alt="위치"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* 작성자 정보와 메인 이미지 사이 gap */}
        <div className={styles.gap24}></div>

        {/* 메인 이미지 */}
        <div className={styles.mainImage}>
          <Image
            src="/images/Tranquil Beachside Serenity 1.png"
            alt="메인 이미지"
            width={400}
            height={531}
          />
        </div>

        <div className={styles.gap24}></div>

        {/* 본문 내용 */}
        <div className={styles.content}>
          살겠노라 살겠노라. 청산에 살겠노라. <br />
          머루랑 다래를 먹고 청산에 살겠노라. <br />
          얄리얄리 얄랑셩 얄라리 얄라 <br />
          <br />
          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          <br />
          너보다 시름 많은 나도 자고 일어나 우노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐 <br />
          이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          이럭저럭 하여 낮일랑 지내 왔건만 <br />
          올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          어디다 던지는 돌인가 누구를 맞히려던 돌인가. <br />
          미워할 이도 사랑할 이도 없이 맞아서 우노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          살겠노라 살겠노라. 바다에 살겠노라. <br />
          나문재, 굴, 조개를 먹고 바다에 살겠노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라. <br />
          사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          가다 보니 배불룩한 술독에 독한 술을 빚는구나. <br />
          조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1] <br />
          얄리얄리 얄라셩 얄라리 얄라
        </div>

        {/* 이미지 갤러리 */}
        <div className={styles.imageGallery}>
          <div className={styles.galleryImage}>
            <Image
              src="/images/Frame 427323252.png"
              alt="갤러리 이미지"
              width={822}
              height={464}
            />
            <div className={styles.playButton}>
              <div className={styles.playIcon}>▶</div>
            </div>
          </div>
        </div>

        <div className={styles.gap24}></div>

        {/* 좋아요/싫어요 영역 */}
        <div className={styles.reactionArea}>
          <div className={styles.badArea}>
            <Image
              src="/icons/outline/bad.svg"
              alt="싫어요"
              width={24}
              height={24}
            />
            <span className={styles.badCount}>24</span>
          </div>
          <div className={styles.goodArea}>
            <Image
              src="/icons/outline/good.svg"
              alt="좋아요"
              width={24}
              height={24}
            />
            <span className={styles.goodCount}>12</span>
          </div>
        </div>

        <div className={styles.gap24}></div>

        {/* 버튼 영역 */}
        <div className={styles.buttonArea}>
          <Button
            variant="tertiary"
            theme="light"
            size="small"
            leftIcon={
              <Image
                src="/icons/outline/menu.svg"
                alt="편집"
                width={24}
                height={24}
              />
            }
            className={styles.listButton}
            onClick={() => router.push("/boards")}
          >
            목록으로
          </Button>
          <Button
            variant="tertiary"
            theme="light"
            size="small"
            leftIcon={
              <Image
                src="/icons/outline/edit.svg"
                alt="편집"
                width={24}
                height={24}
              />
            }
            className={styles.editButton}
            onClick={() => router.push(`/boards/${id}/edit`)}
          >
            수정하기
          </Button>
        </div>

        <div className={styles.gap24}></div>

        {/* 구분선 */}
        <div className={styles.divider}></div>
      </div>

      {/* gap 영역 */}
      <div className={styles.gap}></div>

      {/* detail-footer 영역 */}
      <div className={styles.detailFooter}>
        {/* 댓글 헤더 */}
        <div className={styles.commentHeader}>
          <Image
            src="/icons/outline/chat.svg"
            alt="댓글"
            width={24}
            height={24}
          />
          <span className={styles.commentTitle}>댓글</span>
        </div>

        {/* 댓글 작성 영역 */}
        <CommentWrite isEdit={false} onSubmit={handleCommentSubmit} />

        {/* 댓글 목록 */}
        <CommentList
          comments={comments}
          onCommentEdit={handleCommentEdit}
          onCommentDelete={handleCommentDelete}
        />
      </div>
    </div>
  );
};

export default BoardsDetail;
