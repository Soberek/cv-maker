// *Components
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import LinksForm from "./Forms/LinksForm";

import { useState } from "react";

import { initialCVData } from "../../data/initialCVData";
import SkillsForm from "./Forms/SkillsForm";
import ExperienceForm from "./Forms/ExperienceForm";
import EducationForm from "./Forms/EducationForm";
import ProjectsForm from "./Forms/ProjectsForm";
import LanguagesForm from "./Forms/LanguagesForm";

const CvPreview = () => {
  const [data] = useState(initialCVData);

  return (
    <>
      {/* CV container */}
      <div className="p-t-[141.4%] mx-auto flex h-[297mm] w-[210mm] max-w-[100%] flex-col">
        <PersonalInfoForm {...data.personal_info} />

        <LinksForm data={data.links} />

        <div className="flex flex-wrap [&>*]:w-1/2 [&>*]:p-6">
          <div className="w-1/2">
            <SkillsForm />
            <ExperienceForm />
            <EducationForm />
          </div>

          <div className="w-1/2">
            <ProjectsForm />
            <LanguagesForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CvPreview;
