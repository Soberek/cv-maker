import { UseFormRegister } from "react-hook-form";

import { InputsI } from "../CvPanel";

interface InputPropsI {
  label_title?: string;
  name: keyof InputsI | `skills.${number}.skill_name`;
  register: UseFormRegister<InputsI>;
}

const Input = ({ register, label_title, name }: InputPropsI) => {
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
      />
    </div>
  );
};

export default Input;
