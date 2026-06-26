import { Suspense } from "react";
import ExperiencesPageContent from "./ExperiencesPageContent";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900">
              Explore Experiences
            </h1>
            <p className="mt-2 text-stone-600">Loading experiences...</p>
          </div>
        </div>
      }
    >
      <ExperiencesPageContent />
    </Suspense>
  );
}
