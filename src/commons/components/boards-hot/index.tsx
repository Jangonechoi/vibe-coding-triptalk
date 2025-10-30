"use client";

import Image from "next/image";
import styles from "./styles.module.css";

// Mock 데이터 타입 정의
interface HotTalkCard {
  id: string;
  title: string;
  author: string;
  authorImage: string;
  likes: number;
  date: string;
  image: string;
}

export default function BoardsHot() {
  // Mock 데이터 (나중에 API로 대체)
  const hotTalks: HotTalkCard[] = [
    {
      id: "1",
      title: "제주 살이 1일차 청산별곡이 생각나네요",
      author: "홍길동",
      authorImage: "/icons/outline/person.svg",
      likes: 24,
      date: "2024.11.11",
      image: "/images/a.png",
    },
    {
      id: "2",
      title: "길 걷고 있었는데 고양이한테 간택 받았어요",
      author: "홍길동",
      authorImage: "/icons/outline/person.svg",
      likes: 24,
      date: "2024.11.11",
      image: "/images/b.png",
    },
    {
      id: "3",
      title: "강릉 여름바다 보기 좋네요 서핑하고 싶어요!",
      author: "홍길동",
      authorImage: "/icons/outline/person.svg",
      likes: 24,
      date: "2024.11.11",
      image: "/images/c.png",
    },
    {
      id: "4",
      title: "누가 양양 핫하다고 했어 나밖에 없는데?",
      author: "홍길동",
      authorImage: "/icons/outline/person.svg",
      likes: 24,
      date: "2024.11.11",
      image: "/images/d.png",
    },
  ];

  return (
    <div className={styles.container}>
      {/* 제목 */}
      <h2 className={styles.title}>오늘 핫한 트립토크</h2>

      {/* 카드 영역 */}
      <div className={styles.cardArea}>
        {hotTalks.map((card) => (
          <div key={card.id} className={styles.card}>
            {/* 카드 이미지 */}
            <div className={styles.cardImageWrapper}>
              <Image
                src={card.image}
                alt={card.title}
                width={112}
                height={152}
                className={styles.cardImage}
              />
            </div>

            {/* 카드 내용 */}
            <div className={styles.cardContent}>
              <div className={styles.cardContentTop}>
                <h3 className={styles.cardTitle}>{card.title}</h3>

                <div className={styles.profile}>
                  <div className={styles.profileImageWrapper}>
                    <Image
                      src={card.authorImage}
                      alt={card.author}
                      width={24}
                      height={24}
                      className={styles.profileImage}
                    />
                  </div>
                  <span className={styles.profileName}>{card.author}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.likes}>
                  <Image
                    src="/icons/outline/good.svg"
                    alt="좋아요"
                    width={24}
                    height={24}
                    className={styles.likesIcon}
                  />
                  <span className={styles.likesCount}>{card.likes}</span>
                </div>
                <span className={styles.date}>{card.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
