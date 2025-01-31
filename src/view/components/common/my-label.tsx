import { cn } from "../../../utils/style.util";

export function MyLabel({
  htmlFor,
  label,
  className,
}: {
  htmlFor?: string;
  label: string | React.ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        `cursor-pointer mb-1 text-md font-bold text-black dark:text-slate-400`,
        className
      )}
    >
      {label}
    </label>
  );
}
