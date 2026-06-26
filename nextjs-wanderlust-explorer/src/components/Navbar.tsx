"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const { favoriteCount } = useFavorites();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          <span className="block text-base font-bold tracking-tight text-stone-950 sm:text-lg">
            Wanderlust Labs
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-teal-700">
            Experience Explorer
          </span>
        </Link>

        <ul className="flex max-w-full flex-wrap items-center justify-end gap-1 sm:gap-2">
          {navLinks.map(({ href, label }) => {
            const active = isActive(pathname, href);
            const displayLabel =
              href === "/favorites" && favoriteCount > 0
                ? `${label} (${favoriteCount})`
                : label;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative rounded-full px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:px-4 sm:text-sm ${
                    active
                      ? "bg-teal-600 text-white shadow-sm"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-950"
                  }`}
                >
                  {displayLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
