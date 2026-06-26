import type { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ExperienceCard";

interface ExperienceGridProps {
  experiences: Experience[];
}

export default function ExperienceGrid({ experiences }: ExperienceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
