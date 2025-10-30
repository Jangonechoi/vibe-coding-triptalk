"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BoardsWrite from "@/commons/components/boards-write";
import { BoardWriteData } from "@/commons/components/boards-write";

interface BoardEditPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardEditPage({ params }: BoardEditPageProps) {
  const router = useRouter();
  const [initialData, setInitialData] = useState<BoardWriteData | null>(null);

  useEffect(() => {
    // 실제로는 API를 통해 기존 게시물 데이터를 가져와야 합니다
    // 임시로 더미 데이터를 설정합니다
    const fetchBoardData = async () => {
      // const response = await fetch(`/api/boards/${params.boardId}`);
      // const data = await response.json();

      // 더미 데이터
      setInitialData({
        writer: "홍길동",
        password: "********", // 보안상 실제 비밀번호는 표시하지 않음
        title: "코드캠프",
        contents: "코드캠프",
        zipcode: "01234",
        address: "서울특별시 강남구",
        addressDetail: "1211",
        youtubeUrl: "",
        images: [],
      });
    };

    fetchBoardData();
  }, [params.boardId]);

  const handleSubmit = async (data: BoardWriteData) => {
    // 실제로는 API를 통해 게시물을 수정해야 합니다
    console.log("수정할 데이터:", data);
    // const response = await fetch(`/api/boards/${params.boardId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });

    alert("게시물이 수정되었습니다.");
    router.push(`/boards/${params.boardId}`);
  };

  const handleCancel = () => {
    router.push(`/boards/${params.boardId}`);
  };

  if (!initialData) {
    return <div>로딩중...</div>;
  }

  return (
    <BoardsWrite
      isEdit={true}
      initialData={initialData}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
}
