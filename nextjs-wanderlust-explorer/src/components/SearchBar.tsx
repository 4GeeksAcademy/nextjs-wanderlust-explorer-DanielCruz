"use client";

interface SearchBarProps {
  value?: string;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value = "",
  onSearchChange,
  placeholder = "Search by title, city, or country...",
}: SearchBarProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="experience-search"
        className="mb-2 block text-sm font-semibold text-stone-800"
      >
        Search experiences
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onSearchChange?.(event.target.value)}
        placeholder={placeholder}
        aria-label="Search experiences"
        className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-stone-950 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus-visible:outline-none"
      />
    </div>
  );
}
