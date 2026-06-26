"use client";

import Navbar from "@/components/Navbar";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesLayoutInner({
  children,
}: {
  children: React.ReactNode;
}) {
  const { favoriteCount } = useFavorites();

  return (
    <>
      <Navbar favoriteCount={favoriteCount} />
      <main className="flex-1">{children}</main>
    </>
  );
}
