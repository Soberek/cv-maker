import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";

import { InputsI } from "../types";

import PanelTitle from "../elements/PanelTitle";
import Input from "../elements/Input";
import Button from "../elements/Button";

type TechStackPanelProps = {
  register: UseFormRegister<InputsI>;
  fields: FieldArrayWithId<InputsI, "skills", "id">[];
  append: UseFieldArrayAppend<InputsI, "skills">;
  remove: UseFieldArrayRemove;
};

const TechStackPanel = ({ register, fields, append, remove }: TechStackPanelProps) => {
  return (
    <>
      <PanelTitle>YOUR SKILLS</PanelTitle>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center [&>div:first-child]:mr-2">
          <Input register={register} name={`skills.${index}.name`} placeholder="Skill name" />
          <Input register={register} name={`skills.${index}.proficiency`} placeholder="Proficiency" />
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
        <Button type="button" onClick={() => append({ name: "", proficiency: "" })}>
          Add skill
        </Button>
        <Button type="button" onClick={() => remove(fields.length - 1)}>
          Remove skill
        </Button>
      </div>
    </>
  );
};

export default TechStackPanel;
