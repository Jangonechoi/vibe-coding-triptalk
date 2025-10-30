"use client";

import BoardsDetail from "@/commons/components/boards-detail";

interface BoardDetailPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardDetailPage({ params }: BoardDetailPageProps) {
  return <BoardsDetail id={params.boardId} />;
}
