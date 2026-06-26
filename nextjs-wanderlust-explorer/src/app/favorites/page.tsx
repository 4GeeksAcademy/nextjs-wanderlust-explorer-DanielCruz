import EmptyState from "@/components/EmptyState";

export default function FavoritesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Your Favorites
        </h1>
        <p className="mt-2 text-stone-600">
          Saved experiences will appear here once favorite toggling is
          implemented.
        </p>
      </div>

      <EmptyState
        title="No favorites yet"
        description="Tap the heart icon on any experience card to save it here. Favorites will be managed in shared component state in a later phase."
      />
    </div>
  );
}
