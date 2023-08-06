import { UseFormRegister } from "react-hook-form";

import { InputsI } from "../types";
import { EducationI, SkillI } from "../../../types/initialCVData";

type EducationNames = `educations.${number}.${keyof EducationI}`;
type SkillsNames = `skills.${number}.${keyof SkillI}`;

interface InputProps {
  label_title?: string;
  placeholder?: string;
  name: keyof InputsI | SkillsNames | EducationNames;
  register: UseFormRegister<InputsI>;
}

const Input = ({ register, label_title, name, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label_title && (
        <label htmlFor={name} className="mb-2 text-[1rem] text-gray-400">
          {label_title}
        </label>
      )}

      <input
        className="mb-2 border-b-2 border-gray-600 bg-gray-800 pb-2 text-white outline-none focus:border-b-2 focus:border-cyan-500"
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
