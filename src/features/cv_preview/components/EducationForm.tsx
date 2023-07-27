import { Text } from "@react-pdf/renderer";
import { tw } from "../CvPreview";

import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

const EducationForm = () => {
  return (
    <SectionView>
      <SectionTitle>Education</SectionTitle>
      <SectionContent>
        <Text style={tw("")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          aspernatur, deserunt cumque iure vel modi possimus consequuntur
        </Text>
      </SectionContent>
    </SectionView>
  );
};

export default EducationForm;
