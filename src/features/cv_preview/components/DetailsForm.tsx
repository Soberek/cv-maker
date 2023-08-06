import { CvData } from "../../../types/initialCVData";

import { tw } from "../style/tailwind_react_pdf";
import { Text, View, Link } from "@react-pdf/renderer";

import SectionView from "./elements/SectionView";
import SectionTitle from "./elements/SectionTitle";
import SectionContent from "./elements/SectionContent";

type PickedPersonalInfo = Pick<CvData["personal_info"], "email" | "phone" | "github">;

interface LinkFormProps {
  detail_title: string;
  value: string;
  type?: "link" | "email" | undefined;
  link_name: string | undefined;
}

const LinkForm = ({ detail_title, value, type, link_name }: LinkFormProps) => {
  return (
    <View style={tw("mb-3")}>
      <Text style={tw("uppercase text-xs font-robotobold mb-[0.2rem]")}>{detail_title.split("_").join(" ")}</Text>
      <Text style={tw("text-xs")}>
        <Link style={tw(`text-black no-underline`)} src={type === "link" ? `${value}` : ""}>
          {link_name || value}
        </Link>
      </Text>
    </View>
  );
};

const DetailsForm = ({ phone, email, github }: PickedPersonalInfo) => {
  const details: {
    title: string;
    value: string;
    link_name?: string;
    type?: "link" | "email" | undefined;
  }[] = [
    {
      title: "Phone",
      value: phone,
    },
    {
      title: "Email",
      value: email,
      type: "email",
    },
    {
      title: "Github",
      link_name: "github.com",
      value: github,
      type: "link",
    },
  ];

  return (
    <SectionView>
      <SectionTitle>Details</SectionTitle>
      <SectionContent>
        {details.map((detail, key) => {
          return (
            <LinkForm
              key={key}
              detail_title={detail.title}
              value={detail.value}
              type={detail.type}
              link_name={detail.link_name}
            />
          );
        })}
      </SectionContent>
    </SectionView>
  );
};

export default DetailsForm;
