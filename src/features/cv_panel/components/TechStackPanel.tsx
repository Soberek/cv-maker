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
        <div key={field.id} className="flex items-center [&>div:not(:last-child)]:mr-2">
          <Input inputProps={{ ...register(`skills.${index}.name`) }} placeholder="Skill name" />
          <Input placeholder="Proficiency" inputProps={{ ...register(`skills.${index}.proficiency`) }} />
          <div className="flex items-center">
            <Button type="button" onClick={() => remove(index)}>
              Delete
            </Button>
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
