"use client";

interface SearchBarProps {
  value?: string;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value = "",
  onSearchChange,
  placeholder = "Search sailing, food tours, wellness...",
}: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="experience-search" className="sr-only">
        Search experiences
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onSearchChange?.(event.target.value)}
        placeholder={placeholder}
        aria-label="Search experiences"
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
      />
    </div>
  );
}
