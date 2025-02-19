import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={cn("w-full max-w-8xl mx-auto px-4 md:px-8", className)}>
      {children}
    </div>
  );
}
