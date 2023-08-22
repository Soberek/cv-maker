import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { InputsI } from "../types";
import Input from "../elements/Input";
import Button from "../elements/Button";
import PanelTitle from "../elements/PanelTitle";

type EducationPanelProps = {
  register: UseFormRegister<InputsI>;
  fields: FieldArrayWithId<InputsI, "educations", "id">[];
  append: UseFieldArrayAppend<InputsI, "educations">;
  remove: UseFieldArrayRemove;
};

const EducationPanel = ({ fields, register, append, remove }: EducationPanelProps) => {
  return (
    <>
      <PanelTitle>YOUR EDUCATIONAL BACKGROUND</PanelTitle>
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col border-t-4 border-cyan-500 pt-4 [&>*>input]:mb-2">
          <Input
            label_title="School name"
            placeholder="University of Oxford"
            inputProps={{ ...register(`educations.${index}.school_name`) }}
          />
          <Input
            inputProps={{ ...register(`educations.${index}.school_location`) }}
            label_title="School location"
            placeholder="Oxford, England"
          />
          <Input
            inputProps={register(`educations.${index}.major`)}
            label_title="School location"
            placeholder="Oxford, England"
          />
          <Input
            inputProps={register(`educations.${index}.start_date`)}
            label_title="Start date"
            placeholder="Sep 2020"
          />
          <Input
            inputProps={register(`educations.${index}.end_date`)}
            label_title="Start date"
            placeholder="Jun 2024"
          />
        </div>
      ))}

      <div className="flex gap-2">
        <Button
          type="button"
          onClick={() => append({ school_name: "", school_location: "", major: "", start_date: "", end_date: "" })}
        >
          Add Education
        </Button>
        <Button type="button" onClick={() => remove(fields.length - 1)}>
          Remove Education
        </Button>
      </div>
    </>
  );
};

export default EducationPanel;
