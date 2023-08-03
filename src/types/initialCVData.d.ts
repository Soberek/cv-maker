export interface PersonalInfoI {
  name: string;
  job_title: string;
  description: string;
  email: string;
  github: string;
  phone: string;
}

export interface ProjectI {
  name: string;
  tools: string[];
  source: string;
  demo: string;
  description: string[];
}

interface SkillI {
  skill_name: string;
}

export interface LanguageI {
  name: string;
  proficiency: string;
}

export interface EducationI {
  school_name: string;
  school_location: string;
  major: string;
  start_date: string;
  end_date: string;
}

export interface WorkExperienceI {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
}

export interface initialCVDataI {
  personal_info: PersonalInfoI;
  skills: SkillI[];
  work_experience?: WorkExperienceI[];
  education: EducationI[];
  languages: LanguageI[];
  projects: ProjectI[];
}
