import { UseFormRegister } from "react-hook-form";

import { InputsI } from "../types";

interface TextareaProps {
  label_title: string;
  name: keyof InputsI;
  register: UseFormRegister<InputsI>;
}

const TextArea = ({ register, label_title, name }: TextareaProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-[1rem] text-gray-400">
        {label_title}
      </label>

      <textarea
        {...register(name)}
        className="mb-2 min-h-[100px] border-b-2 border-gray-600 bg-gray-800 pb-2 text-white outline-none focus:border-b-2 focus:border-cyan-500"
      />
    </div>
  );
};

export default TextArea;
