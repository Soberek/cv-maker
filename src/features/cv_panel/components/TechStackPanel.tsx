import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";

import { InputsI } from "../CvPanel";
import PanelTitle from "../elements/PanelTitle";

import Input from "../elements/Input";

interface TechStackPanelPropsI {
  register: UseFormRegister<InputsI>;
  fields: FieldArrayWithId<InputsI, "skills", "id">[];
  append: UseFieldArrayAppend<InputsI, "skills">;
  remove: UseFieldArrayRemove;
}

const TechStackPanel = ({ register, fields, append, remove }: TechStackPanelPropsI) => {
  return (
    <>
      <PanelTitle>Your skills</PanelTitle>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center">
          <Input register={register} name={`skills.${index}.skill_name`} />
          <div className="flex w-1/4 items-start">
            <button
              type="button"
              onClick={() => remove(index)}
              className="ml-2 border-2 border-cyan-500 px-2 text-cyan-500 hover:bg-cyan-500 hover:text-black"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="[&>button:not(:first-child)]:ml-2">
        <button
          type="button"
          onClick={() => append({ skill_name: "" })}
          className="border-2 border-cyan-500 px-2 py-2 text-cyan-500"
        >
          Add skill
        </button>
        <button
          type="button"
          onClick={() => remove(fields.length - 1)}
          className="border-2 border-cyan-500 px-2 py-2 text-cyan-500"
        >
          Remove skill
        </button>
      </div>
    </>
  );
};

export default TechStackPanel;
