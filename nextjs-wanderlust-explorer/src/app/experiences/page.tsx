import ExperienceGrid from "@/components/ExperienceGrid";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

export default function ExperiencesPage() {
  const { filteredExperiences, totalCount } = useExperienceFilters();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Explore Experiences
        </h1>
        <p className="mt-2 text-stone-600">
          Discover {totalCount} curated activities across destinations worldwide.
        </p>
      </div>

      <div className="mb-8 space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6">
        <SearchBar />
        <FilterBar />
      </div>

      <ExperienceGrid experiences={filteredExperiences} />
    </div>
  );
}
