import { useMemo } from "react";
import type { Experience, ExperienceCategory } from "@/types/experience";

const VALID_CATEGORIES: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

export interface UseExperienceFiltersParams {
  experiences: Experience[];
  search: string;
  category: string;
  destination: string;
}

export interface UseExperienceFiltersResult {
  filteredExperiences: Experience[];
  totalCount: number;
  resultCount: number;
  categoryOptions: ExperienceCategory[];
  destinationOptions: string[];
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesSearch(
  title: string,
  destination: string,
  search: string,
): boolean {
  const term = search.trim();
  if (!term) {
    return true;
  }

  const regex = new RegExp(escapeRegExp(term), "i");
  return regex.test(title) || regex.test(destination);
}

function matchesCategory(
  experienceCategory: ExperienceCategory,
  category: string,
): boolean {
  const value = category.trim();
  if (!value) {
    return true;
  }

  if (!VALID_CATEGORIES.includes(value as ExperienceCategory)) {
    return false;
  }

  return experienceCategory === value;
}

function matchesDestination(destination: string, filter: string): boolean {
  const value = filter.trim();
  if (!value) {
    return true;
  }

  return destination.toLowerCase().includes(value.toLowerCase());
}

export function useExperienceFilters({
  experiences,
  search,
  category,
  destination,
}: UseExperienceFiltersParams): UseExperienceFiltersResult {
  const categoryOptions = VALID_CATEGORIES;

  const destinationOptions = useMemo(() => {
    const uniqueDestinations = [...new Set(experiences.map((item) => item.destination))];
    return uniqueDestinations.sort((a, b) => a.localeCompare(b));
  }, [experiences]);

  const filteredExperiences = useMemo(() => {
    return experiences.filter(
      (experience) =>
        matchesSearch(experience.title, experience.destination, search) &&
        matchesCategory(experience.category, category) &&
        matchesDestination(experience.destination, destination),
    );
  }, [experiences, search, category, destination]);

  return {
    filteredExperiences,
    totalCount: experiences.length,
    resultCount: filteredExperiences.length,
    categoryOptions,
    destinationOptions,
  };
}
