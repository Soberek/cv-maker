import { useState } from "react";
import { initialCVData } from "../../../data/initialCVData";

import { createTw } from "react-pdf-tailwind";
import { Document, Page, View } from "@react-pdf/renderer";

import PersonalInfoForm from "./PersonalInfoForm";
import DetailsForm from "./LinksForm";
import TechStackForm from "./TechStackForm";
import LanguagesForm from "./LanguagesForm";
import ProjectsForm from "./ProjectsForm";
import ProfileForm from "./ProfileForm";

export const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },

    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const AdamTemplate = () => {
  const [data] = useState(initialCVData);

  return (
    <Document title="CVMaker">
      <Page style={tw("relative mx-auto h-[297mm] w-[210mm] max-w-[100%] ")}>
        <View style={tw("absolute flex flex-row h-[100%] w-[100%]")}>
          <View style={tw("w-4/12 bg-gray-100")}></View>
          <View style={tw("flex-1")}></View>
        </View>

        {/* Personal */}
        <View style={tw("flex flex-row mx-auto my-8")}>
          <PersonalInfoForm
            name={data.personal_info.name}
            job_title={data.personal_info.job_title}
          />
        </View>

        <View style={tw("flex flex-row ")}>
          {/* Left */}
          <View style={tw("w-4/12 px-6")}>
            {/* Details */}
            <DetailsForm data={data.details} />
            <TechStackForm data={data.skills} />
            <LanguagesForm />
          </View>

          {/* Right */}
          <View style={tw("flex-1 px-6")}>
            <ProfileForm />
            <ProjectsForm />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default AdamTemplate;
