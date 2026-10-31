import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"
import { EDUCATION, LINKS, NAME, PHOTO_URL, ROLE, SITE_URL, SUMMARY } from "@/utils/constants/Profile"
import { Certifications } from "@/utils/constants/SkillsList"

// Schema.org Person data so search engines can identify the site's owner and profiles
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: ROLE,
  description: SUMMARY,
  url: SITE_URL,
  image: PHOTO_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: EDUCATION.school
  },
  hasCredential: Certifications.map((cert) => ({
    "@type": "EducationalOccupationalCredential",
    name: cert.name,
    ...(cert.url && { url: cert.url })
  })),
  knowsAbout: ["AWS", "Azure", "Terraform", "Docker", "Jenkins", "CI/CD", "n8n", "TypeScript", "Rust", "Next.js", "React", "Node.js", "Selenium", "Ethereum"],
  sameAs: [LINKS.github, LINKS.linkedin, LINKS.medium, LINKS.blog]
}

// Single-page portfolio: every section lives on the home route
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
    </>
  )
}
