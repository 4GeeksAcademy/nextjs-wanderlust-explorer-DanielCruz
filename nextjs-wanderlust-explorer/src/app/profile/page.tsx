export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="border-b border-stone-200 bg-gradient-to-r from-teal-50 to-amber-50 px-6 py-10 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-900 text-xl font-semibold text-white">
              AL
            </div>
            <div>
              <h1 className="text-2xl font-bold text-stone-900">Alex Rivera</h1>
              <p className="text-stone-600">Travel enthusiast · Member since 2024</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-medium text-stone-500">Saved favorites</p>
            <p className="mt-2 text-3xl font-bold text-stone-900">0</p>
            <p className="mt-1 text-sm text-stone-500">
              Placeholder count until shared favorites state is wired up.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-medium text-stone-500">Home base</p>
            <p className="mt-2 text-lg font-semibold text-stone-900">
              San Francisco, USA
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Mock profile data for the Wanderlust Labs explorer demo.
            </p>
          </div>
        </div>

        <div className="border-t border-stone-200 px-6 py-5 sm:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            About
          </h2>
          <p className="mt-2 leading-relaxed text-stone-600">
            Alex loves discovering local food tours, sunrise hikes, and cultural
            workshops while traveling. This static profile page will later reflect
            live favorites data from shared application state.
          </p>
        </div>
      </div>
    </div>
  );
}
