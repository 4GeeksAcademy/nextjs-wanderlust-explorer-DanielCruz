interface EmptyStateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or filters.",
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center shadow-sm sm:px-10 sm:py-20">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-2xl ring-1 ring-teal-100">
        🔍
      </div>
      <h3 className="text-xl font-semibold text-stone-950">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-500 sm:text-base">
        {description}
      </p>
      {children}
    </div>
  );
}
