import { UseFormRegister } from "react-hook-form";

import Input from "../elements/Input";
import Textarea from "../elements/Textarea";
import { InputsI } from "../types";
import PanelTitle from "../elements/PanelTitle";

type ProfilePanelProps = {
  register: UseFormRegister<InputsI>;
};

const ProfilePanel = ({ register }: ProfilePanelProps) => {
  return (
    <>
      <PanelTitle>YOUR PERSONAL INFO</PanelTitle>
      <Input inputProps={{ ...register(`name`) }} label_title="Name" />
      <Input inputProps={{ ...register(`job_title`) }} label_title="Job title" />
      <Input inputProps={{ ...register(`email`) }} label_title="Email" />
      <Input inputProps={{ ...register(`github`) }} label_title="Github" />
      <Input inputProps={{ ...register(`phone`) }} label_title="Phone" />
      <Textarea inputProps={{ ...register(`description`) }} label_title="Description" className="min-h-[100px]" />
    </>
  );
};

export default ProfilePanel;
