import { UseFormRegister } from "react-hook-form";

import Input from "../elements/Input";
import Textarea from "../elements/Textarea";
import { InputsI } from "../CvPanel";

interface ProfilePanelPropsI {
  register: UseFormRegister<InputsI>;
}

const ProfilePanel = ({ register }: ProfilePanelPropsI) => {
  return (
    <>
      <Input register={register} label_title="Name" name="name" />
      <Input register={register} label_title="Job title" name="job_title" />
      <Input register={register} label_title="Email" name="email" />
      <Input register={register} label_title="Github" name="github" />
      <Input register={register} label_title="Phone" name="phone" />
      <Textarea register={register} label_title="Description" name="description" />
    </>
  );
};

export default ProfilePanel;
