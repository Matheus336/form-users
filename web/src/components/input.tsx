import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

export function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        id={id}
        className="px-4 py-2.5 rounded-lg border border-gray-300"
        {...props}
      />
    </div>
  );
}
