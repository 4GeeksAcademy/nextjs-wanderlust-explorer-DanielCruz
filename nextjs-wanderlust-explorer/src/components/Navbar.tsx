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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-stone-900"
        >
          Wanderlust Labs
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
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
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
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
