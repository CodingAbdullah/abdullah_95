"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

// The page is prerendered, so buildYear (passed from the server) is what the static HTML holds; after
// hydration React re-renders with the visitor's current year, keeping the footer correct without a rebuild
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => buildYear)
  return <>{year}</>
}
