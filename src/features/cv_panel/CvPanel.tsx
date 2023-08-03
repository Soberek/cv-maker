import { useState } from "react";
import { PersonalInfoI, SkillI, initialCVDataI } from "../../types/initialCVData";

import ProfilePanel from "./components/ProfilePanel";
import TechStackPanel from "./components/TechStackPanel";
import EducationPanel from "./components/EducationPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import { useFieldArray, useForm } from "react-hook-form";

// type PanelT = keyof initialCVDataI;

export interface InputsI extends PersonalInfoI {
  skills: SkillI[];
}

const CvPanel = ({ cv_data }: { cv_data: initialCVDataI }) => {
  const [active_panel, setActivePanel] = useState<keyof initialCVDataI>("personal_info");

  const default_tech_stack_inputs: initialCVDataI["skills"] = cv_data.skills.length
    ? cv_data.skills.map((skill) => skill)
    : [{ skill_name: "React" }];

  // Todo: based on form data will construct new cv_data object and generate new cv preview

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
      skills: default_tech_stack_inputs,
      // education
      // experience
      // languages
      // certificates
    },
  });

  const {
    fields: tech_stack_fields,
    append: techStackAppend,
    remove,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const handlePanelChange = (panel: keyof initialCVDataI) => {
    setActivePanel(panel);
  };

  const panels: { key: keyof initialCVDataI; component: JSX.Element }[] = [
    {
      key: "personal_info",
      component: <ProfilePanel register={register} />,
    },
    {
      key: "skills",
      component: (
        <TechStackPanel register={register} fields={tech_stack_fields} append={techStackAppend} remove={remove} />
      ),
    },
    {
      key: "education",
      component: <EducationPanel control={control} />,
    },
    {
      key: "work_experience",
      component: <ExperiencePanel control={control} />,
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

              console.log(values);

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
                // !fix:
                // tech_stack: [values.skills.map((skills) => skills.skill)],
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
      <div className="mr-2 flex-1 p-6 text-sm">
        {/* One big Form */}
        <form className="[&>*]:mb-2">{panel_to_display}</form>
      </div>
    </div>
  );
};

export default CvPanel;
