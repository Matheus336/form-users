import { ComponentProps } from "react";

interface RadioItemProps extends ComponentProps<"input"> {
  label: string;
}

export function RadioItem({ label, id, ...props }: RadioItemProps) {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
      <input
        id={id}
        type="radio"
        className="w-4 h-4 text-blue-600 cursor-pointer"
        {...props}
      />
      <span className="text-gray-700 font-medium">{label}</span>
    </label>
  );
}
