import Link from "next/link";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/experiences"
        className="mb-6 inline-flex text-sm font-medium text-teal-700 hover:text-teal-800"
      >
        ← Back to experiences
      </Link>

      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="aspect-[16/9] bg-stone-200" />

        <div className="p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            Experience Detail
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            Experience #{id}
          </h1>
          <p className="mt-4 leading-relaxed text-stone-600">
            Full experience details will be loaded from the local dataset in a
            later implementation phase. This placeholder confirms the dynamic
            route is working for experience ID{" "}
            <span className="font-medium text-stone-900">{id}</span>.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-xs font-medium uppercase text-stone-500">
                Category
              </p>
              <p className="mt-1 font-medium text-stone-900">Coming soon</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-xs font-medium uppercase text-stone-500">
                Rating
              </p>
              <p className="mt-1 font-medium text-stone-900">Coming soon</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-xs font-medium uppercase text-stone-500">
                Price
              </p>
              <p className="mt-1 font-medium text-stone-900">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
