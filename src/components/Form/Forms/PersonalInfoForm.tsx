import type { initialCVDataI } from "../../../types/initialCVData";

import { Text, View } from "@react-pdf/renderer";
import { tw } from "../CvPreview";

const PersonalInfoForm = ({
  name,
  job_title,
  description,
}: initialCVDataI["personal_info"]) => {
  return (
    <View style={tw("bg-[#323d4e] px-6 py-6 text-white flex flex-col")}>
      <Text style={tw("text-3xl font-semibold")}>{name}</Text>
      <Text style={tw("text-2xl font-semibold text-cyan-600")}>
        {job_title}
      </Text>
      <Text style={tw("mt-2 text-sm font-medium")}>{description}</Text>
    </View>
  );
};

export default PersonalInfoForm;
