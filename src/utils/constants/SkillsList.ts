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
        url: "https://www.credly.com/badges/ea32a77f-e17f-4750-b1b7-b62d3388deb2"
    },
    {
        name: "AWS Certified AI Practitioner"
    },
    {
        name: "Microsoft Azure Fundamentals (AZ-900)",
        url: "https://www.credly.com/badges/6b4fb749-f168-448f-a3f3-16104c630493"
    }
];
