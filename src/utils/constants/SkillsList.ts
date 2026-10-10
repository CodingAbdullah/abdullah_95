import { Certification, SkillGroup } from "../types/SkillsType";

// Skill groups for the skills page, aligned with the resume
export const SkillGroups: SkillGroup[] = [
    {
        title: "Languages",
        skills: ["JavaScript (ES7+)", "TypeScript", "Java", "SQL", "Solidity", "Bash", "PowerShell"]
    },
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "Redux Toolkit", "TailwindCSS", "Bootstrap"]
    },
    {
        title: "Backend & Data",
        skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Supabase"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Azure", "Docker", "Jenkins", "Terraform", "CI/CD", "Maven", "AWS CLI"]
    },
    {
        title: "Testing",
        skills: ["Selenium WebDriver", "Cucumber", "JUnit", "Mocha.js"]
    },
    {
        title: "Web3",
        skills: ["Ethereum", "Smart Contracts", "Web3.js", "Remix IDE", "Ganache CLI"]
    },
    {
        title: "Mainframe",
        skills: ["COBOL", "JCL", "ISPF", "TSO"]
    },
    {
        title: "AI & Developer Tools",
        skills: ["Claude", "Cursor", "v0", "Replit Agent", "Git", "GitHub", "Bitbucket", "Jira", "VS Code", "Eclipse", "Jupyter Notebook", "Vim"]
    }
];

// Certifications for the skills page
export const Certifications: Certification[] = [
    {
        name: "AWS Certified Cloud Practitioner",
        url: "https://www.credly.com/badges/ea32a77f-e17f-4750-b1b7-b62d3388deb2"
    },
    {
        name: "Microsoft Azure Certified",
        url: "https://www.credly.com/badges/6b4fb749-f168-448f-a3f3-16104c630493"
    },
    {
        name: "HashiCorp Terraform Associate"
    }
];
