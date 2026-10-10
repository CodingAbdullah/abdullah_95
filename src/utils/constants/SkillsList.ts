import { Certification, SkillGroup } from "../types/SkillsType";

// Skill groups for the skills page: the strongest, most relevant skills only
export const SkillGroups: SkillGroup[] = [
    {
        title: "Languages",
        skills: ["TypeScript", "JavaScript", "Java", "Rust", "SQL", "Bash", "Solidity"]
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TailwindCSS"]
    },
    {
        title: "Backend & Data",
        skills: ["Node.js", "Express.js", "MongoDB", "Supabase"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Azure", "Terraform", "Docker", "Jenkins", "CI/CD", "n8n"]
    },
    {
        title: "Testing",
        skills: ["Selenium WebDriver", "Cucumber", "JUnit"]
    }
];

// Certifications for the skills page
export const Certifications: Certification[] = [
    {
        name: "AWS Certified Cloud Practitioner",
        url: "https://www.credly.com/badges/289525d4-67a9-48e4-abf5-d40d1b43b245/public_url"
    },
    {
        name: "AWS Certified AI Practitioner"
    },
    {
        name: "Microsoft Azure Fundamentals (AZ-900)",
        url: "https://www.credly.com/badges/1b6c1c9e-32c9-471f-8bac-297bb87751ce/public_url"
    }
];
