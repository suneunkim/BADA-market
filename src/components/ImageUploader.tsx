import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploaderProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const ImageUploader = ({ onChange, value }: ImageUploaderProps) => {
  const [showImages, setShowImages] = useState<string[]>(value);

  const handleUpload = (result: any) => {
    const newImage: string = result.info.secure_url;
    const newImages = [...showImages, newImage];
    setShowImages(newImages);
    onChange(newImages);
  };

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 3,
      }}
    >
      {({ open }) => {
        return (
          <div>
            {showImages.length > 0 ? (
              // 미리보기
              <div className="flex w-full justify-around space-x-2">
                {value &&
                  showImages.map((image, index) => (
                    <div
                      key={index}
                      className={`
                      relative mb-3 overflow-hidden rounded-lg border-2 border-black/30 border-white transition
                      ${showImages.length === 1 ? "h-96 w-96" : "aspect-square w-full"}
                      `}
                    >
                      <Image
                        className="h-full w-full object-cover"
                        src={image}
                        fill
                        sizes="auto"
                        alt="상품 이미지"
                      />
                    </div>
                  ))}
              </div>
            ) : (
              // 업로드 버튼
              <div
                className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border border-dashed border-neutral-400 p-32 text-neutral-400 transition hover:opacity-70"
                onClick={() => open?.()}
              >
                <TbPhotoPlus size={50} />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUploader;
