import { useEffect, useState } from "react";

function getIsConstrainedDevice(): boolean {
  if (typeof window === "undefined") return false;

  const nav = window.navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };

  const saveData = Boolean(nav.connection?.saveData);
  const lowCpu = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
  const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;

  return saveData || lowCpu || lowMemory;
}

export function useAdaptiveMotion(): boolean {
  const [forceReducedMotion, setForceReducedMotion] = useState<boolean>(() => getIsConstrainedDevice());

  useEffect(() => {
    setForceReducedMotion(getIsConstrainedDevice());
  }, []);

  return forceReducedMotion;
}
