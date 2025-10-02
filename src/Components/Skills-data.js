import react_icon from '../assets/skills-icon/react_icon.png'
import javascript_icon from '../assets/skills-icon/javascript_icon.gif'
import java_icon from '../assets/skills-icon/java_icon.gif'
import html_icon from '../assets/skills-icon/html_icon.png'
import css_icon from '../assets/skills-icon/css_icon.png'
import tailwind_icon from '../assets/skills-icon/tailwind_icon.png'
import git_icon from '../assets/skills-icon/git_icon.png'
import github_icon from '../assets/skills-icon/github_icon.png'
const skills = [
    {
        name: "React js",
        image: react_icon,
        description: "UI Library",
        rotate: true,
        isUsed1: true,
        isUsed2: true,
    },
    {
        name: "JavaScript",
        image: javascript_icon,
        description: "Scripting",
        isUsed1: true,
        isUsed2: true,
        isUsed3: true
    },
    {
        name: "Java",
        image: java_icon,
        description: "OOP Language",
        isUsed2: true,
    },
    {
        name: "HTML",
        image: html_icon,
        description: "Markup",
        isUsed1: true,
        isUsed3: true
    },
    {
        name: "CSS",
        image: css_icon,
        description: "Styling",
        isUsed1: true,
        isUsed3: true
    },
    {
        name: "Tailwind CSS",
        image: tailwind_icon,
        description: "Utility-First",
        isUsed2: true,
    },
    {
        name: "GIT",
        image: git_icon,
        description: "Version Control",
        isUsed3: true
    },
    {
        name: "Git Hub",
        image: github_icon,
        description: "Code Hosting"
    },
]
export default skills;