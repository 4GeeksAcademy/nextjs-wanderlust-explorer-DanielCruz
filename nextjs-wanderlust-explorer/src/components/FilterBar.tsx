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
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="w-full sm:max-w-xs">
        <label
          htmlFor="category-filter"
          className="mb-1 block text-sm font-medium text-stone-700"
        >
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
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:max-w-xs">
        <label
          htmlFor="destination-filter"
          className="mb-1 block text-sm font-medium text-stone-700"
        >
          Destination
        </label>
        <select
          id="destination-filter"
          value={selectedDestination}
          onChange={(event) => onDestinationChange?.(event.target.value)}
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
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
