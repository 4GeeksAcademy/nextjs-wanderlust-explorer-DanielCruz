import { experiences } from "@/data/experiences";
import type { Experience, ExperienceCategory } from "@/types/experience";

export interface ExperienceFilterParams {
  searchTerm?: string;
  category?: ExperienceCategory | "";
  destination?: string;
}

export interface UseExperienceFiltersResult {
  filteredExperiences: Experience[];
  totalCount: number;
}

export function useExperienceFilters(
  params: ExperienceFilterParams = {},
): UseExperienceFiltersResult {
  // Placeholder: returns full dataset until regex search and stacked filters are implemented.
  void params;

  return {
    filteredExperiences: experiences,
    totalCount: experiences.length,
  };
}
