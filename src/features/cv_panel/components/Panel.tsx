import { CvData } from "../../../types/initialCVData";

import ProfilePanel from "./ProfilePanel";
import TechStackPanel from "./TechStackPanel";
import EducationPanel from "./EducationPanel";
import ExperiencePanel from "./ExperiencePanel";
import { useFieldArray, useForm } from "react-hook-form";

import { InputsI } from "../types";
import usePanel from "../hooks/usePanel";
import LanguagesPanel from "./LanguagesPanel";

type PanelProps = { cv_data: CvData; handlePreviewGeneration: (data: CvData) => void };

export const Panel = ({ cv_data, handlePreviewGeneration }: PanelProps) => {
  const DEFAULT_SKILLS_VALUE = [{ skill_name: "React", proficiency: "experienced" }];
  const DEFAULT_EDUCATIONS_VALUE = [{ school_name: "", school_location: "", major: "", start_date: "", end_date: "" }];
  const DEFAULT_LANGUAGES_VALUE = [{ name: "", proficiency: "" }];

  const { handleSubmit, register, control, getValues } = useForm<InputsI>({
    defaultValues: {
      // personal info
      name: cv_data.personal_info ? cv_data.personal_info.name : "",
      job_title: cv_data.personal_info ? cv_data.personal_info.job_title : "",
      description: cv_data.personal_info ? cv_data.personal_info.description : "",
      email: cv_data.personal_info ? cv_data.personal_info.email : "",
      github: cv_data.personal_info ? cv_data.personal_info.github : "",
      phone: cv_data.personal_info ? cv_data.personal_info.phone : "",
      // skills
      skills: cv_data.skills ? cv_data.skills : DEFAULT_SKILLS_VALUE,
      // education
      educations: cv_data.educations ? cv_data.educations : DEFAULT_EDUCATIONS_VALUE,
      // experience
      // languages
      languages: cv_data.languages ? cv_data.languages : DEFAULT_LANGUAGES_VALUE,
      // certificates
    },
  });

  const {
    fields: tech_stack_fields,
    append: techStackAppend,
    remove: techStackRemove,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: educations_fields,
    append: educationAppend,
    remove: educationRemove,
  } = useFieldArray({
    control,
    name: "educations",
  });

  const {
    fields: languages_fields,
    append: languagesAppend,
    remove: languagesRemove,
  } = useFieldArray({
    control,
    name: "languages",
  });

  const { active_panel, handlePanelChange } = usePanel("personal_info");

  const panels: { key: keyof CvData; component: JSX.Element }[] = [
    {
      key: "personal_info",
      component: <ProfilePanel register={register} />,
    },
    {
      key: "skills",
      component: (
        <TechStackPanel
          register={register}
          fields={tech_stack_fields}
          append={techStackAppend}
          remove={techStackRemove}
        />
      ),
    },
    {
      key: "educations",
      component: (
        <EducationPanel
          register={register}
          fields={educations_fields}
          append={educationAppend}
          remove={educationRemove}
        />
      ),
    },
    {
      key: "work_experience",
      component: <WorkExperiencePanel />,
    },
    {
      key: "languages",
      component: (
        <LanguagesPanel
          register={register}
          fields={languages_fields}
          append={languagesAppend}
          remove={languagesRemove}
        />
      ),
    },
  ];

  const panel_to_display = panels.find((panel) => panel.key === active_panel)?.component;

  return (
    <div className="flex h-screen py-6 text-white">
      {/* Section list */}
      <div className="w-1/3 border-r-2 p-6">
        <ul className="flex flex-col gap-4 text-xs [&>*]:px-1 [&>*]:py-2">
          {panels.map((panel) => (
            <li
              key={panel.key}
              onClick={() => handlePanelChange(panel.key)}
              className={`transition-all hover:cursor-pointer hover:text-cyan-500 ${
                panel.key === active_panel ? "text-cyan-500" : ""
              }`}
            >
              {panel.key.charAt(0).toUpperCase() + panel.key.slice(1).replace("_", " ")}
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={() => {
              void handleSubmit;

              const values = getValues();

              const new_cv_data: CvData = {
                personal_info: {
                  name: values.name,
                  job_title: values.job_title,
                  description: values.description,
                  email: values.email,
                  github: values.github,
                  phone: values.phone,
                },
                skills: values.skills || [],
                educations: values.educations || [],
                languages: values.languages || [],
                projects: values.projects || [],
              };

              handlePreviewGeneration(new_cv_data);
            }}
            className="my-4 rounded-full bg-cyan-500 px-4 py-2 text-white transition-all hover:bg-cyan-700"
          >
            Make
          </button>
        </div>
      </div>

      {/* Section details */}
      <div className="mr-2 flex-1 overflow-y-auto p-6 text-sm">
        {/* One big Form */}
        <form className="[&>*]:mb-2">{panel_to_display}</form>
      </div>
    </div>
  );
};
