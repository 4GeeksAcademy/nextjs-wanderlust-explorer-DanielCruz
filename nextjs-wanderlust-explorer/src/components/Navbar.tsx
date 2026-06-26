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
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:text-lg"
        >
          Wanderlust Labs
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
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:px-4 sm:py-2 sm:text-sm ${
                    active
                      ? "bg-stone-900 text-white"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
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
