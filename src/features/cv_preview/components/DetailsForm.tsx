import { initialCVDataI } from "../../../types/initialCVData";

import { tw } from "../style/tailwind_react_pdf";
import { Text, View, Link } from "@react-pdf/renderer";

import SectionView from "./elements/SectionView";
import SectionTitle from "./elements/SectionTitle";
import SectionContent from "./elements/SectionContent";

type PickedPersonalInfo = Pick<initialCVDataI["personal_info"], "email" | "phone" | "github">;

const LinkForm = ({ detail_title, value }: { detail_title: string; value: string }) => {
  return (
    <View style={tw("mb-3")}>
      <Text style={tw("uppercase text-xs font-robotobold mb-[0.2rem]")}>{detail_title.split("_").join(" ")}</Text>
      <Text style={tw("text-xs")}>
        <Link style={tw("text-black no-underline")} src={`https://${value}`}>
          {value}
        </Link>
      </Text>
    </View>
  );
};

const DetailsForm = ({ phone, email, github }: PickedPersonalInfo) => {
  const details = [phone, email, github];

  console.log(details);

  return (
    <SectionView>
      <SectionTitle>Details</SectionTitle>
      <SectionContent>
        <LinkForm detail_title={"Email"} value={email} />
        <LinkForm detail_title={"Phone"} value={phone} />
        <LinkForm detail_title={"Github"} value={github} />
      </SectionContent>
    </SectionView>
  );
};

export default DetailsForm;
