import { cn } from "@/lib/utils"

// Shared wrapper for each page section, offset so the sticky nav does not cover headings
export default function Section({
  id,
  title,
  className,
  children
}: {
  id: string
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-20 py-12 sm:py-16 fade-in", className)}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 id={`${id}-heading`} className="mb-8 text-2xl sm:text-3xl font-bold text-primary">
          <span className="text-muted-foreground font-normal">{"// "}</span>{title}
        </h2>
        {children}
      </div>
    </section>
  )
}
