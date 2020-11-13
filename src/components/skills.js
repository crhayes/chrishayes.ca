/** @jsx jsx */
import { jsx } from "theme-ui"

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "GraphQL",
  "PHP",
  "MySQL",
  "React.js",
  "Next.js",
  "Jest",
  "Cypress",
  "Laravel",
  "Node.js",
  "Docker",
  "Git & Github",
  "Bash",
  "Visual Studio Code",
  "Unit Testing",
  "e2e Testing",
  "Agile",
  "Mentorship",
  "Remote Work",
]

const Skill = ({ children }) => (
  <li
    sx={{
      mb: 2,
      "&::before": {
        content: '"↳"',
        mr: 2,
        color: "primary",
      },
    }}
  >
    {children}
  </li>
)

const Skills = () => (
  <ul
    sx={{
      columnCount: [2, 4],
      p: 0,
      listStyle: "none",
      fontFamily: "monospace",
    }}
  >
    {SKILLS.map((skill, index) => (
      <Skill key={index}>{skill}</Skill>
    ))}
  </ul>
)

export default Skills
