import { Text } from "@react-pdf/renderer";

import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

const LanguagesForm = () => {
  return (
    <SectionView>
      <SectionTitle>Languages</SectionTitle>
      <SectionContent>
        <Text>English B2/C1</Text>
        <Text>Polish Native</Text>
      </SectionContent>
    </SectionView>
  );
};

export default LanguagesForm;
