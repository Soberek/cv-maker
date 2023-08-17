import { Text } from "@react-pdf/renderer";

import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";
import { CvData } from "../../../types/initialCVData";

type LanguagesFormProps = {
  languages_data: CvData["languages"];
};

const LanguagesForm = ({ languages_data }: LanguagesFormProps) => {
  return (
    <SectionView>
      <SectionTitle>Languages</SectionTitle>
      <SectionContent>
        {languages_data.map((item, index) => {
          if (!item.name && !item.proficiency) return null;

          return (
            <Text key={index}>
              {item.name} - {item.proficiency}
            </Text>
          );
        })}
      </SectionContent>
    </SectionView>
  );
};

export default LanguagesForm;
