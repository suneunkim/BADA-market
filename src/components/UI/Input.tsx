import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type: string;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: FieldErrors;
  [key: string]: any;
}

const Input = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  register,
  required,
  errors,
  ...rest
}: InputProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`
        peer-focus-:scale-75 mb-1 block pl-1 text-sm font-medium
        text-neutral-800/80
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:text-neutral-400
        ${errors[id] ? "text-rose-500" : "text-zinc-400"} 
      `}
      >
        {label}
      </label>
      <div>
        {formatPrice && (
          <span
            className="pointer-events-none absolute bottom-2 left-0
        pl-3 text-neutral-500
        "
          >
            ₩
          </span>
        )}
        <input
          id={id}
          disabled={disabled}
          type={type}
          {...register(id, { required: "내용을 입력해주세요" })}
          {...rest}
          className={`w-full rounded-md border p-2 shadow-sm transition 
          focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400
          disabled:cursor-not-allowed disabled:opacity-80 
          ${formatPrice ? "pl-8" : ""}
          ${errors[id] ? "border-red-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
        />
      </div>
    </div>
  );
};

export default Input;
