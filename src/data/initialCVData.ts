import { CvData } from "../types/initialCVData";

export const initialCVData: CvData = {
  personal_info: {
    name: "Krzysztof Palpuchowski",
    job_title: "Front-end Developer",
    description: `In middle school, my fascination with programming began. I was drawn to the boundless opportunities presented by programming languages, particularly C++. I distinctly remember the thrill that surged through me when I created my very first command-line game.\n
    Beyond the realm of coding, my curiosity extends to the intricacies of human motivation and behavioral psychology. Exploring the depths of why we make certain decisions, the underlying factors that drive our actions, and the interplay between external stimuli and our responses has become a subject of immense fascination.`,
    email: "palpuchowski.k@gmail.com",
    phone: "+48 791 000 326",
    github: "https://github.com/Soberek",
  },
  skills: [
    { name: "HTML & CSS (RWD)", proficiency: "Experienced" },
    { name: "Javascript/TypeScript", proficiency: "Experienced" },
    { name: "React", proficiency: "Experienced" },
    { name: "Redux", proficiency: "Skillful" },
    { name: "Git", proficiency: "Skillful" },
    { name: "Jest, Vitest", proficiency: "Skillful" },
    { name: "TailwindCSS", proficiency: "Experienced" },
    { name: "SASS", proficiency: "Skillful" },
    { name: "APIs", proficiency: "Experienced" },
    { name: "Figma", proficiency: "Skillful" },
    { name: "Visual Studio Code", proficiency: "Experienced" },
    { name: "Node.js, Express.js", proficiency: "Beginner" },
    { name: "SQL", proficiency: "Beginner" },
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
      name: "CVMaker (in progress)",
      tools: [
        { name: "Typescript" },
        { name: "React" },
        { name: "react-hook-form" },
        { name: "tailwindcss" },
        { name: "react-pdf/renderer" },
        { name: "Git" },
        { name: "CI/CD" },
      ],
      source: "https://github.com/Soberek/cv-maker",
      demo: "https://main--cvmakerproject.netlify.app/",
      description: [
        "Developed a CV maker project utilizing TypeScript and React,",
        "Implemented the capability to generate a CV preview by utilizing provided data,",
        "Leveraged the power of react-hook-form for seamless data handling",
        "Implemented robust CI/CD pipelines ensuring seamless integration",
      ],
    },
  ],
  languages: [
    {
      name: "Polish",
      proficiency: "Native speaker",
    },
    {
      name: "English",
      proficiency: "B2/C1",
    },
  ],
};
