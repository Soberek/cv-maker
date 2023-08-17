import { Text, View } from "@react-pdf/renderer";
import { tw } from "../style/tailwind_react_pdf";

import SectionView from "./elements/SectionView";
import SectionTitle from "./elements/SectionTitle";
import SectionContent from "./elements/SectionContent";
import { CvData } from "../../../types/initialCVData";

type SkillProps = { skill_name: string; skill_proficiency: string };

const Skill = ({ skill_name, skill_proficiency }: SkillProps) => {
  return (
    <View style={tw("mb-3 w-1/2 flex flex-row justify-between items-center")}>
      <Text style={tw("text-sm text-black text-xs")}>{skill_name}</Text>
      <Text style={tw("text-sm text-black pr-4 text-xs")}>{skill_proficiency}</Text>
    </View>
  );
};

const TechStackForm = ({ skills_data }: { skills_data: CvData["skills"] }) => {
  return (
    <SectionView>
      <SectionTitle>Tech stack</SectionTitle>
      <SectionContent>
        <View style={tw("flex flex-row flex-wrap")}>
          {skills_data.map((skill, index) => (
            <Skill key={index} skill_name={skill.skill} skill_proficiency={skill.proficiency} />
          ))}
        </View>
      </SectionContent>
    </SectionView>
  );
};

export default TechStackForm;
