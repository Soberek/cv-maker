import { Text, View } from "@react-pdf/renderer";
import { tw } from "../style/tailwind_react_pdf";

import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";
import { CvData } from "../../../types/initialCVData";

const EducationForm = ({ education_data }: { education_data: CvData["educations"] }) => {
  return (
    <SectionView>
      <SectionTitle>Education</SectionTitle>
      <SectionContent>
        {education_data.map((item, index) => (
          <View key={index} style={tw("mb-2")}>
            <Text style={tw("text-xs")}>
              {item.start_date} - {item.end_date}
            </Text>
            <Text style={tw("font-robotobold mt-1")}>{item.major}</Text>

            <Text>
              {item.school_name} in {item.school_location}
            </Text>
          </View>
        ))}
      </SectionContent>
    </SectionView>
  );
};

export default EducationForm;
