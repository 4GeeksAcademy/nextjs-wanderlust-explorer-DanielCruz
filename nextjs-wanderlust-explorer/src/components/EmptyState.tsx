interface EmptyStateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or filters to find more experiences.",
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-2xl">
        🔍
      </div>
      <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-500">
        {description}
      </p>
      {children}
    </div>
  );
}
