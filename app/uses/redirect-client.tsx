"use client";

import { useEffect } from "react";

export function UsesRedirect() {
  useEffect(() => {
    window.location.replace("/experiencia");
  }, []);
  return null;
}
