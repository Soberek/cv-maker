import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { InputsI } from "..";
import Input from "../elements/Input";
import PanelTitle from "../elements/PanelTitle";
import Button from "../elements/Button";

type LanguagesPanelProps = {
  register: UseFormRegister<InputsI>;
  fields: FieldArrayWithId<InputsI, "languages", "id">[];
  append: UseFieldArrayAppend<InputsI, "languages">;
  remove: UseFieldArrayRemove;
};

const LanguagesPanel = ({ register, fields, append, remove }: LanguagesPanelProps) => {
  return (
    <>
      <PanelTitle>YOUR PROFICIENCY IN LANGUAGES</PanelTitle>
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col border-t-4 border-cyan-500 pt-4 [&>*>input]:mb-2">
          <Input
            inputProps={{ ...register(`languages.${index}.name`) }}
            placeholder="Polish"
            label_title="Language Name"
          />
          <Input
            inputProps={{ ...register(`languages.${index}.proficiency`) }}
            placeholder="Native speaker"
            label_title="Language Proficiency"
          />
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" onClick={() => append({ name: "", proficiency: "" })}>
          Add Language
        </Button>
        <Button type="button" onClick={() => remove(fields.length - 1)}>
          Remove Language
        </Button>
      </div>
    </>
  );
};

export default LanguagesPanel;
