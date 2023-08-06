import { CvData } from "../types/initialCVData";

export const initialCVData: CvData = {
  personal_info: {
    name: "Krzysztof Palpuchowski",
    job_title: "Front-end Developer",
    description:
      "Frontend developer with 2+ years of experience in frontend development. I am passionate about frontend development and I love to learn new technologies. I am also passionate about learning new languages and technologies",
    email: "palpuchowski.k@gmail.com",
    phone: "+48 791 879 326",
    github: "https://github.com/Soberek",
  },
  skills: [
    { skill_name: "SCSS" },
    { skill_name: "TypeScript" },
    { skill_name: "React" },
    { skill_name: "Redux" },
    { skill_name: "RWD" },
    { skill_name: "Git" },
    { skill_name: "Vitest" },
    { skill_name: "TailwindCSS" },
    { skill_name: "MaterialUI" },
    { skill_name: "React Query" },
    { skill_name: "APIs" },
    { skill_name: "Figma" },
  ],

  work_experience: [
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
    },
  ],
  educations: [
    {
      school_name: "Akademia im. Jakuba z Paradyża",
      school_location: "Gorzów Wielkopolski",
      major: "BSc. of Computer Science",
      start_date: "Sep 2018",
      end_date: "Mar 2023",
    },
    {
      school_name: "Technikum Nr. 1 im. S. Dariusa i S. Girenasa",
      school_location: "Myślibórz",
      major: "IT Technician",
      start_date: "Oct 2014",
      end_date: "Jun 2018",
    },
  ],
  projects: [
    {
      name: "CVMaker",
      tools: [
        "Javascript/Typescript",
        "React",
        "Web Storage API",
        "react-hook-form",
        "react-pdf/renderer",
        "Figma",
        "Git",
      ],
      source: "https://github.com/Soberek/cv-maker",
      demo: "https://netlify.com/soberek/project1",
      description: [
        "Utilized JavaScript for front-end development, creating a user-friendly and interactive interface,",
        "Integrated a live preview functionality, allowing users to see their CV in real-time as they make changes,",
        "Incorporated data validation to ensure the accuracy and completeness of CV entries,",
        "Performed rigorous testing of the application using Vitest framework to ensure high-quality code and functionality.",
      ],
    },
  ],
  languages: [
    {
      name: "Polish",
      proficiency: "Native",
    },
    {
      name: "English",
      proficiency: "B2/C1",
    },
  ],
};
