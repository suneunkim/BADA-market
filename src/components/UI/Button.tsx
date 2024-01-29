import React from "react";

interface ButtonProps {
  label: string; // 버튼 내용
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean; // 테두리만 있는 하얀 버튼
  small?: boolean;
}

const Button = ({ label, onClick, disabled, outline, small }: ButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        my-10
        w-full
        rounded-md
        p-3
        transition
        hover:opacity-80
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${outline ? "border border-neutral-300" : "bg-sky-400"}
        ${outline ? "border-black" : "border-sky-400"}
        ${outline ? "text-black" : "text-white"}
        ${outline && "hover:text-gray-600"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-2" : "py-3"}
        ${small ? "font-medium" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
