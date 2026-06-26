"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favoriteCount } = useFavorites();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
        <div className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 px-6 py-12 sm:px-8 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 bg-white text-2xl font-bold text-teal-700 shadow-lg">
                LM
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Lea Moreau</h1>
                <p className="mt-1 text-teal-50">
                  Cultural Explorer · Member since 2024
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-teal-50 backdrop-blur-sm">
              Building a travel shortlist one favorite at a time.
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 sm:p-8">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Saved favorites
            </p>
            <p className="mt-3 text-4xl font-bold text-stone-950">{favoriteCount}</p>
            <p className="mt-2 text-sm text-stone-500">
              Live count from your current session favorites.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Home base
            </p>
            <p className="mt-3 text-xl font-semibold text-stone-950">Paris, France</p>
            <p className="mt-2 text-sm text-stone-500">
              Mock profile data for the Wanderlust Labs explorer demo.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Travel style
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Culture", "Food", "Hidden Gems", "Slow Travel"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-stone-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 px-6 py-6 sm:px-8 sm:py-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            About
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-stone-600">
            Lea loves discovering local food tours, historic neighborhoods, and
            cultural workshops while traveling across Europe and beyond. She keeps
            a running shortlist of experiences that blend authenticity, comfort,
            and memorable local storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}
