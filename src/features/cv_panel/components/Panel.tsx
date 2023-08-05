import { CvData } from "../../../types/initialCVData";

import ProfilePanel from "./ProfilePanel";
import TechStackPanel from "./TechStackPanel";
import EducationPanel from "./EducationPanel";
import ExperiencePanel from "./ExperiencePanel";
import { useFieldArray, useForm } from "react-hook-form";
import { InputsI } from "../types";
import usePanel from "../hooks/usePanel";

// type PanelT = keyof initialCVDataI;

export const Panel = ({ cv_data }: { cv_data: CvData }) => {
  const EMPTY_SKILLS_DEFAULT_VALUE = [{ skill_name: "" }];
  const EMPTY_EDUCATION_DEFAULT_VALUE = [
    {
      school_name: "",
      school_location: "",
      major: "",
      start_date: "",
      end_date: "",
    },
  ];

  const { handleSubmit, register, control, getValues } = useForm<InputsI>({
    defaultValues: {
      // personal info
      name: cv_data.personal_info.name,
      job_title: cv_data.personal_info.job_title,
      description: cv_data.personal_info.description,
      email: cv_data.personal_info.email,
      github: cv_data.personal_info.github,
      phone: cv_data.personal_info.phone,
      // skills
      skills: cv_data.skills.length ? cv_data.skills : EMPTY_SKILLS_DEFAULT_VALUE,
      // education
      educations: cv_data.educations.length ? cv_data.educations : EMPTY_EDUCATION_DEFAULT_VALUE,
      // experience
      // languages
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
    fields: education_fields,
    append: educationAppend,
    remove: educationRemove,
  } = useFieldArray({
    control,
    name: "educations",
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
          fields={education_fields}
          append={educationAppend}
          remove={educationRemove}
        />
      ),
    },
    {
      key: "work_experience",
      component: <ExperiencePanel />,
    },
  ];

  const panel_to_display = panels.find((panel) => panel.key === active_panel)?.component ?? <div>Panel not found</div>;

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

              const new_cv_data = {
                personal_info: {
                  name: values.name,
                  job_title: values.job_title,
                },
                profile: {
                  description: values.description,
                },
                details: {
                  email: values.email,
                  github: values.github,
                  phone: values.phone,
                },
              };

              console.log(new_cv_data);
            }}
            className="my-4 rounded-full bg-cyan-500 px-4 py-2 text-white transition-all hover:bg-cyan-700"
          >
            Make
          </button>
        </div>
      </div>

      {/* Section details */}
      <div className="mr-2 flex-1 overflow-y-scroll p-6 text-sm">
        {/* One big Form */}
        <form className=" [&>*]:mb-2">{panel_to_display}</form>
      </div>
    </div>
  );
};