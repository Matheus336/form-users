import { ComponentProps, PropsWithChildren } from "react";

interface SelectProps extends PropsWithChildren, ComponentProps<"select"> {
  label: string;
}

export function Select({ label, id, children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <select
        id={id}
        className="h-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
