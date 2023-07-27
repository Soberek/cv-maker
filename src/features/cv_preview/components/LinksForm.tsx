import { initialCVDataI } from "../../../types/initialCVData";

import { tw } from "../CvPreview";
import { Text, View, Link } from "@react-pdf/renderer";

import SectionView from "./elements/SectionView";
import SectionTitle from "./elements/SectionTitle";
import SectionContent from "./elements/SectionContent";

const LinkForm = ({
  detail_title,
  value,
}: {
  detail_title: string;
  value: string;
}) => {
  return (
    <View style={tw("mb-3")}>
      <Text style={tw("uppercase")}>{detail_title.split("_").join(" ")}</Text>
      <Text style={tw("text-xs")}>
        <Link style={tw("text-black no-underline")} src={`https://${value}`}>
          {value}
        </Link>
      </Text>
    </View>
  );
};

const DetailsForm = ({ data }: { data: initialCVDataI["details"] }) => {
  console.log(Object.entries(data));
  return (
    <SectionView>
      <SectionTitle>Details</SectionTitle>
      <SectionContent>
        {Object.entries(data).map(([key, value]) => (
          <LinkForm key={key} detail_title={key} value={value} />
        ))}
      </SectionContent>
    </SectionView>
  );
};

export default DetailsForm;
