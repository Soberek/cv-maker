import { initialCVData } from "../../../data/initialCVData";

const Skill = ({ skill_name }: { skill_name: string }) => {
  return (
    <li className="inline-block rounded-md bg-slate-800 p-2 text-[0.7rem] font-semibold text-white">
      {skill_name}
    </li>
  );
};

const SkillsForm = () => {
  return (
    <div>
      <h3 className="inline-block border-b-2 border-y-cyan-600 text-lg font-bold uppercase text-cyan-600">
        Skills
      </h3>
      <ul className="mb-4 mt-4 flex flex-wrap justify-start gap-2">
        {initialCVData.skills.map((skill) => (
          <Skill skill_name={skill} />
        ))}
      </ul>
    </div>
  );
};

export default SkillsForm;
