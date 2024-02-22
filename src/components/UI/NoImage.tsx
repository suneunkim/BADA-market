import React from "react";

const NoImage = () => {
  return (
    <div className="flex aspect-square flex-col items-center justify-center rounded-lg bg-slate-200 text-sm text-gray-500">
      <svg
        className="h-20 w-20"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.5}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        />
      </svg>
      <p className="text-sm font-semibold text-gray-500">
        등록된 이미지가 없습니다.
      </p>
    </div>
  );
};

export default NoImage;
