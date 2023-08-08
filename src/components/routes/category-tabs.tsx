import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  category: string;
  icon: React.ReactNode;
  className?: string;
}

export default function CategoryTabs({
  category,
  icon,
  className,
}: CategoryTabsProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer gap-2 rounded-xl border bg-neutral-800 p-4 hover:bg-neutral-700",
        className
      )}
    >
      {icon}
      <h1>{category}</h1>
    </div>
  );
}
