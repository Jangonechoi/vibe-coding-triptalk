"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { URL_PATHS } from "@/commons/constants/url";
import { Searchbar } from "@/commons/components/searchbar";
import { Button } from "@/commons/components/button";
import { Pagination } from "@/commons/components/pagination";
import styles from "./styles.module.css";

// 게시물 데이터 타입
interface BoardItem {
  id: number;
  title: string;
  author: string;
  date: string;
}

// 날짜 범위 상태
interface DateRange {
  startDate: string;
  endDate: string;
}

// 샘플 데이터
const sampleBoards: BoardItem[] = [
  { id: 243, title: "제주 살이 1일차", author: "홍길동", date: "2024.12.16" },
  { id: 242, title: "강남 살이 100년차", author: "홍길동", date: "2024.12.16" },
  {
    id: 241,
    title: "길 걷고 있었는데 고양이한테 간택 받았어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 240,
    title: "오늘 날씨 너무 좋아서 바다보러 왔어요~",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 239,
    title: "누가 양양 핫하다고 했어 나밖에 없는데?",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 238,
    title: "여름에 보드타고 싶은거 저밖에 없나요 🥲",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 237,
    title:
      "사무실에서 과자 너무 많이 먹은거 같아요 다이어트하러 여행 가야겠어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 236,
    title: "여기는 기승전 여행이네요 ㅋㅋㅋ",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 235,
    title: "상여금 들어왔는데 이걸로 다낭갈까 사이판 갈까",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 234,
    title: "강릉 여름바다 보기 좋네요",
    author: "홍길동",
    date: "2024.12.16",
  },
];

export default function BoardsList() {
  const router = useRouter();
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: "",
    endDate: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [boards] = useState<BoardItem[]>(sampleBoards);

  const handleSearch = (value: string) => {
    // 검색 로직 구현 예정
    console.log("검색어:", value);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (field: keyof DateRange, value: string) => {
    setDateRange((prev) => ({
      ...prev,
      [field]: value,
    }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleWriteClick = () => {
    router.push(URL_PATHS.BOARDS.NEW);
  };

  return (
    <div className={styles.container} data-testid="boards-list-ready">
      {/* 제목 */}
      <h1 className={styles.title}>트립토크 게시판</h1>

      {/* 검색 영역 */}
      <div className={styles.searchSection}>
        <div className={styles.searchControls}>
          {/* 날짜 범위 선택기 */}
          <div className={styles.datePicker}>
            <div className={styles.dateRangeContainer}>
              <div className={styles.calendarIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.30775 21.5C4.80258 21.5 4.375 21.325 4.025 20.975C3.675 20.625 3.5 20.1974 3.5 19.6923V6.30777C3.5 5.8026 3.675 5.37502 4.025 5.02502C4.375 4.67502 4.80258 4.50002 5.30775 4.50002H6.69225V3.15377C6.69225 2.9346 6.76567 2.7516 6.9125 2.60477C7.05933 2.4581 7.24233 2.38477 7.4615 2.38477C7.68083 2.38477 7.86383 2.4581 8.0105 2.60477C8.15733 2.7516 8.23075 2.9346 8.23075 3.15377V4.50002H15.8077V3.13477C15.8077 2.92193 15.8795 2.74368 16.023 2.60002C16.1667 2.45652 16.3449 2.38477 16.5577 2.38477C16.7706 2.38477 16.9488 2.45652 17.0922 2.60002C17.2359 2.74368 17.3077 2.92193 17.3077 3.13477V4.50002H18.6923C19.1974 4.50002 19.625 4.67502 19.975 5.02502C20.325 5.37502 20.5 5.8026 20.5 6.30777V19.6923C20.5 20.1974 20.325 20.625 19.975 20.975C19.625 21.325 19.1974 21.5 18.6923 21.5H5.30775ZM5.30775 20H18.6923C18.7692 20 18.8398 19.9679 18.9038 19.9038C18.9679 19.8398 19 19.7693 19 19.6923V10.3078H5V19.6923C5 19.7693 5.03208 19.8398 5.09625 19.9038C5.16025 19.9679 5.23075 20 5.30775 20ZM5 8.80777H19V6.30777C19 6.23077 18.9679 6.16026 18.9038 6.09626C18.8398 6.0321 18.7692 6.00002 18.6923 6.00002H5.30775C5.23075 6.00002 5.16025 6.0321 5.09625 6.09626C5.03208 6.16026 5 6.23077 5 6.30777V8.80777Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className={styles.dateInputs}>
                <div className={styles.dateInputGroup}>
                  <input
                    type="text"
                    placeholder="YYYY"
                    className={styles.dateInput}
                    value={dateRange.startDate.split(".")[0] || ""}
                    onChange={(e) => {
                      const year = e.target.value;
                      const currentDate = dateRange.startDate;
                      const parts = currentDate.split(".");
                      const newDate = `${year}.${parts[1] || ""}.${
                        parts[2] || ""
                      }`;
                      handleDateRangeChange("startDate", newDate);
                    }}
                  />
                  <span className={styles.dateSeparator}>.</span>
                  <input
                    type="text"
                    placeholder="MM"
                    className={styles.dateInput}
                    value={dateRange.startDate.split(".")[1] || ""}
                    onChange={(e) => {
                      const month = e.target.value;
                      const currentDate = dateRange.startDate;
                      const parts = currentDate.split(".");
                      const newDate = `${parts[0] || ""}.${month}.${
                        parts[2] || ""
                      }`;
                      handleDateRangeChange("startDate", newDate);
                    }}
                  />
                  <span className={styles.dateSeparator}>.</span>
                  <input
                    type="text"
                    placeholder="DD"
                    className={styles.dateInput}
                    value={dateRange.startDate.split(".")[2] || ""}
                    onChange={(e) => {
                      const day = e.target.value;
                      const currentDate = dateRange.startDate;
                      const parts = currentDate.split(".");
                      const newDate = `${parts[0] || ""}.${
                        parts[1] || ""
                      }.${day}`;
                      handleDateRangeChange("startDate", newDate);
                    }}
                  />
                </div>
                <span className={styles.dateRangeSeparator}>-</span>
                <div className={styles.dateInputGroup}>
                  <input
                    type="text"
                    placeholder="YYYY"
                    className={styles.dateInput}
                    value={dateRange.endDate.split(".")[0] || ""}
                    onChange={(e) => {
                      const year = e.target.value;
                      const currentDate = dateRange.endDate;
                      const parts = currentDate.split(".");
                      const newDate = `${year}.${parts[1] || ""}.${
                        parts[2] || ""
                      }`;
                      handleDateRangeChange("endDate", newDate);
                    }}
                  />
                  <span className={styles.dateSeparator}>.</span>
                  <input
                    type="text"
                    placeholder="MM"
                    className={styles.dateInput}
                    value={dateRange.endDate.split(".")[1] || ""}
                    onChange={(e) => {
                      const month = e.target.value;
                      const currentDate = dateRange.endDate;
                      const parts = currentDate.split(".");
                      const newDate = `${parts[0] || ""}.${month}.${
                        parts[2] || ""
                      }`;
                      handleDateRangeChange("endDate", newDate);
                    }}
                  />
                  <span className={styles.dateSeparator}>.</span>
                  <input
                    type="text"
                    placeholder="DD"
                    className={styles.dateInput}
                    value={dateRange.endDate.split(".")[2] || ""}
                    onChange={(e) => {
                      const day = e.target.value;
                      const currentDate = dateRange.endDate;
                      const parts = currentDate.split(".");
                      const newDate = `${parts[0] || ""}.${
                        parts[1] || ""
                      }.${day}`;
                      handleDateRangeChange("endDate", newDate);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 검색바 */}
          <div className={styles.searchBar}>
            <Searchbar
              variant="primary"
              size="medium"
              placeholder="제목을 검색해 주세요."
              onSearch={handleSearch}
            />
          </div>

          {/* 검색 버튼 */}
          <div className={styles.searchButton}>
            <Button variant="secondary" size="medium">
              검색
            </Button>
          </div>

          {/* 트립토크 등록 버튼 */}
          <div className={styles.writeButton}>
            <Button
              variant="primary"
              size="medium"
              data-testid="boards-write-button"
              onClick={handleWriteClick}
              leftIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.30775 20.5C4.80258 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.30777C3.5 4.80261 3.675 4.37502 4.025 4.02502C4.375 3.67502 4.80258 3.50002 5.30775 3.50002H12.1598C12.4098 3.50002 12.5973 3.57852 12.7223 3.73552C12.8473 3.89269 12.9098 4.06419 12.9098 4.25002C12.9098 4.43586 12.8447 4.60736 12.7145 4.76452C12.5843 4.92152 12.3942 5.00002 12.1442 5.00002H5.30775C5.23075 5.00002 5.16025 5.03211 5.09625 5.09627C5.03208 5.16027 5 5.23077 5 5.30777V18.6923C5 18.7693 5.03208 18.8398 5.09625 18.9038C5.16025 18.9679 5.23075 19 5.30775 19H18.6923C18.7692 19 18.8398 18.9679 18.9038 18.9038C18.9679 18.8398 19 18.7693 19 18.6923V11.7923C19 11.5423 19.0785 11.3548 19.2355 11.2298C19.3927 11.1048 19.5642 11.0423 19.75 11.0423C19.9358 11.0423 20.1073 11.1048 20.2645 11.2298C20.4215 11.3548 20.5 11.5423 20.5 11.7923V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.30775ZM9.5 13.596V11.8155C9.5 11.5744 9.54683 11.3426 9.6405 11.1203C9.734 10.8978 9.86283 10.7045 10.027 10.5405L18.5598 2.00777C18.7148 1.85261 18.8853 1.73944 19.0712 1.66827C19.2571 1.59711 19.4462 1.56152 19.6385 1.56152C19.8347 1.56152 20.0231 1.59711 20.2038 1.66827C20.3846 1.73944 20.5493 1.84936 20.698 1.99802L21.9538 3.25002C22.0986 3.40519 22.2098 3.57636 22.2875 3.76352C22.365 3.95069 22.4038 4.14044 22.4038 4.33277C22.4038 4.52511 22.3708 4.71161 22.3048 4.89227C22.2388 5.07311 22.1282 5.24102 21.973 5.39602L13.4115 13.9578C13.2473 14.1218 13.0541 14.2532 12.8318 14.352C12.6093 14.4507 12.3775 14.5 12.1365 14.5H10.404C10.1462 14.5 9.93108 14.4138 9.75875 14.2413C9.58625 14.0689 9.5 13.8539 9.5 13.596ZM11 13H12.2463L18.4788 6.76727L17.8558 6.14427L17.1885 5.50202L11 11.6905V13Z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              트립토크 등록
            </Button>
          </div>
        </div>
      </div>

      {/* 게시물 목록 */}
      <div className={styles.boardContainer}>
        {/* 테이블 헤더 */}
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>번호</div>
          <div className={styles.headerCell}>제목</div>
          <div className={styles.headerCell}>작성자</div>
          <div className={styles.headerCell}>날짜</div>
        </div>

        {/* 게시물 목록 */}
        <div className={styles.boardList}>
          {boards.map((board) => (
            <div key={board.id} className={styles.boardItem}>
              <div className={styles.cell}>{board.id}</div>
              <div className={styles.cell}>{board.title}</div>
              <div className={styles.cell}>{board.author}</div>
              <div className={styles.cell}>{board.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className={styles.paginationSection}>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
          variant="primary"
          size="medium"
        />
      </div>
    </div>
  );
}
