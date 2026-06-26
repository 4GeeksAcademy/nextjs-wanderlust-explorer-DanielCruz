"use client";

import type { ExperienceCategory } from "@/types/experience";

interface FilterBarProps {
  categoryOptions: ExperienceCategory[];
  destinationOptions: string[];
  selectedCategory?: ExperienceCategory | "";
  selectedDestination?: string;
  onCategoryChange?: (category: ExperienceCategory | "") => void;
  onDestinationChange?: (destination: string) => void;
}

export default function FilterBar({
  categoryOptions,
  destinationOptions,
  selectedCategory = "",
  selectedDestination = "",
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  const destinationValueInOptions = destinationOptions.includes(
    selectedDestination,
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="w-full">
        <label
          htmlFor="category-filter"
          className="mb-2 block text-sm font-semibold text-stone-800"
        >
          Category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) =>
            onCategoryChange?.(event.target.value as ExperienceCategory | "")
          }
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm text-stone-950 shadow-sm outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus-visible:outline-none"
        >
          <option value="">All categories</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <label
          htmlFor="destination-filter"
          className="mb-2 block text-sm font-semibold text-stone-800"
        >
          Destination
        </label>
        <select
          id="destination-filter"
          value={selectedDestination}
          onChange={(event) => onDestinationChange?.(event.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm text-stone-950 shadow-sm outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus-visible:outline-none"
        >
          <option value="">All destinations</option>
          {!destinationValueInOptions && selectedDestination ? (
            <option value={selectedDestination}>{selectedDestination}</option>
          ) : null}
          {destinationOptions.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
