"use client";

import { useEffect } from "react";

export function UsesRedirect() {
  useEffect(() => {
    window.location.replace("/herramientas");
  }, []);
  return null;
}
