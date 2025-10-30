"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/commons/components/input";
import { Button } from "@/commons/components/button";
import styles from "./styles.module.css";

export interface BoardsWriteProps {
  onSubmit?: (data: BoardWriteData) => void;
  onCancel?: () => void;
  isEdit?: boolean;
  initialData?: BoardWriteData;
}

export interface BoardWriteData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  youtubeUrl: string;
  images: File[];
}

export default function BoardsWrite({
  onSubmit,
  onCancel,
  isEdit = false,
  initialData,
}: BoardsWriteProps) {
  const router = useRouter();
  const fileInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [formData, setFormData] = useState<BoardWriteData>(
    initialData || {
      writer: "",
      password: "",
      title: "",
      contents: "",
      zipcode: "",
      address: "",
      addressDetail: "",
      youtubeUrl: "",
      images: [],
    }
  );

  const [previewUrls, setPreviewUrls] = useState<string[]>(["", "", ""]);
  const [errors, setErrors] = useState<Partial<BoardWriteData>>({});

  const handleInputChange = (field: keyof BoardWriteData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 에러 초기화
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleZipcodeSearch = () => {
    // 주소 검색 API 연동
    // 예시로 임시 데이터 설정
    alert("우편번호 검색 기능은 추후 구현 예정입니다.");
  };

  const handleImageUpload = (index: number) => {
    fileInputRefs[index].current?.click();
  };

  const handleFileChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // 이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviewUrls = [...previewUrls];
        newPreviewUrls[index] = reader.result as string;
        setPreviewUrls(newPreviewUrls);
      };
      reader.readAsDataURL(file);

      // 파일 데이터 저장
      const newImages = [...formData.images];
      newImages[index] = file;
      setFormData((prev) => ({ ...prev, images: newImages }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<BoardWriteData> = {};

    if (!isEdit && !formData.writer.trim()) {
      newErrors.writer = "작성자를 입력해주세요.";
    }
    if (!isEdit && !formData.password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }
    if (!formData.title.trim()) {
      newErrors.title = "제목을 입력해주세요.";
    }
    if (!formData.contents.trim()) {
      newErrors.contents = "내용을 입력해주세요.";
    }
    if (!formData.zipcode.trim() || !formData.address.trim()) {
      newErrors.address = "주소를 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        alert("게시물이 등록되었습니다.");
        router.push("/boards");
      }
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isEdit ? "게시물 수정" : "게시물 등록"}</h1>

      <div className={styles.formContainer}>
        {/* 작성자 & 비밀번호 */}
        <div className={styles.rowInputs}>
          <Input
            label="작성자"
            required
            placeholder="작성자 명을 입력해 주세요."
            value={formData.writer}
            onChange={(e) =>
              !isEdit && handleInputChange("writer", e.target.value)
            }
            error={errors.writer}
            disabled={isEdit}
          />
          <Input
            label="비밀번호"
            required
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={isEdit ? "*********" : formData.password}
            onChange={(e) =>
              !isEdit && handleInputChange("password", e.target.value)
            }
            error={errors.password}
            disabled={isEdit}
          />
        </div>

        <div className={styles.divider} />

        {/* 제목 */}
        <Input
          label="제목"
          required
          placeholder="제목을 입력해 주세요."
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          error={errors.title}
        />

        <div className={styles.divider} />

        {/* 내용 */}
        <div className={styles.contentSection}>
          <div className={styles.labelContainer}>
            <span className={styles.label}>내용</span>
            <span className={styles.required}>*</span>
          </div>
          <textarea
            className={styles.textarea}
            placeholder="내용을 입력해 주세요."
            value={formData.contents}
            onChange={(e) => handleInputChange("contents", e.target.value)}
          />
          {errors.contents && (
            <span className={styles.error}>{errors.contents}</span>
          )}
        </div>

        {/* 주소 */}
        <div className={styles.addressSection}>
          <div className={styles.zipcodeContainer}>
            <div className={styles.labelContainer}>
              <span className={styles.label}>주소</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.zipcodeRow}>
              <input
                type="text"
                placeholder="01234"
                value={formData.zipcode}
                onChange={(e) => handleInputChange("zipcode", e.target.value)}
                readOnly
                className={styles.zipcodeInput}
              />
              <Button
                variant="tertiary"
                size="medium"
                onClick={handleZipcodeSearch}
                className={styles.zipcodeButton}
              >
                우편번호 검색
              </Button>
            </div>
            {errors.address && (
              <span className={styles.error}>{errors.address}</span>
            )}
          </div>
          <Input
            placeholder="주소를 입력해 주세요."
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            readOnly
          />
          <Input
            placeholder="상세주소"
            value={formData.addressDetail}
            onChange={(e) => handleInputChange("addressDetail", e.target.value)}
          />
        </div>

        <div className={styles.divider} />

        {/* 유튜브 링크 */}
        <Input
          label="유튜브 링크"
          placeholder="링크를 입력해 주세요."
          value={formData.youtubeUrl}
          onChange={(e) => handleInputChange("youtubeUrl", e.target.value)}
        />

        <div className={styles.divider} />

        {/* 사진 첨부 */}
        <div className={styles.imageSection}>
          <div className={styles.labelContainer}>
            <span className={styles.label}>사진 첨부</span>
          </div>
          <div className={styles.imageBoxes}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={styles.imageBox}
                onClick={() => handleImageUpload(index)}
              >
                <input
                  ref={fileInputRefs[index]}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e)}
                  style={{ display: "none" }}
                />
                {previewUrls[index] ? (
                  <img
                    src={previewUrls[index]}
                    alt={`업로드 이미지 ${index + 1}`}
                    className={styles.previewImage}
                  />
                ) : (
                  <>
                    <img
                      src="/icons/outline/add.svg"
                      alt="추가"
                      className={styles.addIcon}
                    />
                    <span className={styles.uploadText}>
                      클릭해서 사진 업로드
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className={styles.buttonContainer}>
        <Button variant="tertiary" size="medium" onClick={handleCancel}>
          취소
        </Button>
        <Button
          variant="primary"
          size="medium"
          onClick={handleSubmit}
          disabled={
            (!isEdit && (!formData.writer || !formData.password)) ||
            !formData.title ||
            !formData.contents ||
            !formData.address
          }
        >
          {isEdit ? "수정하기" : "등록하기"}
        </Button>
      </div>
    </div>
  );
}
