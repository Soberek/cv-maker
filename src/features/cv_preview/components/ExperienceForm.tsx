import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

import { Text } from "@react-pdf/renderer";

const ExperienceForm = () => {
  return (
    <SectionView>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionContent>
        <Text>Some exp</Text>
      </SectionContent>
    </SectionView>
  );
};

export default ExperienceForm;
