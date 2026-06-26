"use client";

import type { ExperienceCategory } from "@/types/experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

interface FilterBarProps {
  selectedCategory?: ExperienceCategory | "";
  selectedDestination?: string;
  onCategoryChange?: (category: ExperienceCategory | "") => void;
  onDestinationChange?: (destination: string) => void;
}

export default function FilterBar({
  selectedCategory = "",
  selectedDestination = "",
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="w-full sm:max-w-xs">
        <label htmlFor="category-filter" className="mb-1 block text-sm font-medium text-stone-700">
          Category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) =>
            onCategoryChange?.(event.target.value as ExperienceCategory | "")
          }
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:max-w-xs">
        <label htmlFor="destination-filter" className="mb-1 block text-sm font-medium text-stone-700">
          Destination
        </label>
        <input
          id="destination-filter"
          type="text"
          value={selectedDestination}
          onChange={(event) => onDestinationChange?.(event.target.value)}
          placeholder="Filter by city or country..."
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 shadow-sm outline-none placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
      </div>
    </div>
  );
}
