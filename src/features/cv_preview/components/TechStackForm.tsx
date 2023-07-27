import { tw } from "../CvPreview";
import { Text, View } from "@react-pdf/renderer";

import SectionView from "./elements/SectionView";
import SectionTitle from "./elements/SectionTitle";
import SectionContent from "./elements/SectionContent";
import { initialCVDataI } from "../../../types/initialCVData";

const Skill = ({ skill_name }: { skill_name: string }) => {
  return (
    <View style={tw("rounded-md mb-3")}>
      <Text style={tw("text-sm font-semibold text-black")}>{skill_name}</Text>
    </View>
  );
};

const TechStackForm = ({ data }: { data: initialCVDataI["skills"] }) => {
  return (
    <SectionView>
      <SectionTitle>Tech stack</SectionTitle>
      <SectionContent>
        {data.map((skill, index) => (
          <Skill key={index} skill_name={skill} />
        ))}
      </SectionContent>
    </SectionView>
  );
};

export default TechStackForm;
