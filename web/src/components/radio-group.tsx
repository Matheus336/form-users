import { PropsWithChildren } from "react";

interface RadioGroupProps extends PropsWithChildren {
  label: string;
}

export function RadioGroup({ label, children }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-semibold text-gray-700">{label}</span>

      <div className="flex items-center gap-6">{children}</div>
    </div>
  );
}
