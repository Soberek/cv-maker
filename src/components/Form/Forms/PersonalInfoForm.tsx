import type { initialCVDataI } from "../../../types/initialCVData";

const PersonalInfoForm = ({
  name,
  job_title,
  description,
}: initialCVDataI["personal_info"]) => {
  return (
    <div className="bg-[#323d4e] px-6 py-6 text-white">
      <div className="text-2xl font-semibold">{name}</div>
      <div className="text-lg font-semibold text-cyan-600">{job_title}</div>
      <div className="mt-2 text-xs font-medium">{description}</div>
    </div>
  );
};

export default PersonalInfoForm;
