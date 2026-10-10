// Custom type for a group of skills shown on the skills page
export interface SkillGroup {
    title: string,
    skills: string[]
}

// Custom type for a certification shown on the skills page
export interface Certification {
    name: string,
    url?: string
}
