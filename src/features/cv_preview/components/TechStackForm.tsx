import { Text, View } from "@react-pdf/renderer";
import { tw } from "../style/tailwind_react_pdf";

import SectionView from "./elements/SectionView";
import SectionTitle from "./elements/SectionTitle";
import SectionContent from "./elements/SectionContent";
import { CvData } from "../../../types/initialCVData";

const Skill = ({ skill_name }: { skill_name: string }) => {
  return (
    <View style={tw("rounded-md mb-3")}>
      <Text style={tw("text-sm font-semibold text-black")}>{skill_name}</Text>
    </View>
  );
};

const TechStackForm = ({ skills_data }: { skills_data: CvData["skills"] }) => {
  return (
    <SectionView>
      <SectionTitle>Tech stack</SectionTitle>
      <SectionContent>
        {skills_data.map((skill, index) => (
          <Skill key={index} skill_name={skill.skill_name} />
        ))}
      </SectionContent>
    </SectionView>
  );
};

export default TechStackForm;
