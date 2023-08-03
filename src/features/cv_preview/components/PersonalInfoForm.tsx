import type { initialCVDataI } from "../../../types/initialCVData";

import { Text, View } from "@react-pdf/renderer";
import { tw } from "../style/tailwind_react_pdf";

type PersonalInfoPropsI = Pick<initialCVDataI["personal_info"], "name" | "job_title">;

const PersonalInfoForm = ({ name, job_title }: PersonalInfoPropsI) => {
  return (
    <View style={tw("flex flex-col border-2 py-6 px-20 bg-white font-roboto")}>
      <View style={tw("mx-auto")}>
        <Text style={tw("text-2xl uppercase tracking-[0.2rem]")}>{name}</Text>
      </View>

      <View style={tw("mx-auto")}>
        <Text style={tw("text-lg text-center uppercase tracking-[0.2rem]")}>{job_title}</Text>
      </View>
    </View>
  );
};

export default PersonalInfoForm;
