export interface initialCVDataI {
  personal_info: {
    name: string;
    job_title: string;
    description: string;
  };
  links: {
    email: string;
    github_link: string;
    linkedin_link: string;
    phone: string;
  };
  skills: string[];
  work_experience?: [
    {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    },
  ];

  education: [
    {
      institution: string;
      degree: string;
      startDate: string;
      endDate: string;
    },
  ];
  interests: string[];
  projects: [
    {
      name: string;
      source: string;
      demo: string;
      description: string[];
    },
  ];
}
