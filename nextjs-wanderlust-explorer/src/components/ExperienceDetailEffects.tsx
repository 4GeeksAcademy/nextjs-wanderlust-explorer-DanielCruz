"use client";

import { useEffect } from "react";

const DEFAULT_TITLE = "Wanderlust Labs | Experience Explorer";

interface ExperienceDetailEffectsProps {
  title: string;
}

export default function ExperienceDetailEffects({
  title,
}: ExperienceDetailEffectsProps) {
  useEffect(() => {
    document.title = `${title} | Wanderlust Labs`;

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);

  return null;
}
