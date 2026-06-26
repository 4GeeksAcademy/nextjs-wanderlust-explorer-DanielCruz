"use client";

import type { Experience } from "@/types/experience";
import EmptyState from "@/components/EmptyState";
import ExperienceCard from "@/components/ExperienceCard";

interface ExperienceGridProps {
  experiences: Experience[];
  favoriteIds?: string[];
  onToggleFavorite?: (id: string) => void;
}

export default function ExperienceGrid({
  experiences,
  favoriteIds = [],
  onToggleFavorite,
}: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <EmptyState
        title="No experiences found."
        description="Try adjusting your search or filters."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={favoriteIds.includes(experience.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
