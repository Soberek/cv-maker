import { Document, Page, View } from "@react-pdf/renderer";

import PersonalInfoForm from "./PersonalInfoForm";
import DetailsForm from "./DetailsForm";
import TechStackForm from "./TechStackForm";
import LanguagesForm from "./LanguagesForm";
import ProjectsForm from "./ProjectsForm";
import ProfileForm from "./ProfileForm";

import { tw } from "../style/tailwind_react_pdf";
import EducationForm from "./EducationForm";
import { CvData } from "../../../types/initialCVData";

const AdamTemplate = ({ cv_data }: { cv_data: CvData }) => {
  return (
    <Document title="CVMaker">
      <Page style={tw("relative mx-auto h-[297mm] w-[210mm] max-w-[100%] font-roboto")}>
        <View style={tw("absolute flex flex-row h-[100%] w-[100%]")}>
          <View style={tw("w-4/12 bg-gray-100")}></View>
          <View style={tw("flex-1")}></View>
        </View>

        {/* Personal */}
        <View style={tw("flex flex-row mx-auto my-8")}>
          <PersonalInfoForm name={cv_data.personal_info.name} job_title={cv_data.personal_info.job_title} />
        </View>

        <View style={tw("flex flex-row")}>
          {/* Left */}
          <View style={tw("w-4/12 px-6")}>
            {/* Details */}
            <DetailsForm
              phone={cv_data.personal_info.phone}
              email={cv_data.personal_info.email}
              github={cv_data.personal_info.github}
            />
            <TechStackForm skills_data={cv_data.skills} />
            <LanguagesForm />
            <EducationForm education_data={cv_data.educations} />
          </View>

          {/* Right */}
          <View style={tw("flex-1 px-6")}>
            <ProfileForm description={cv_data.personal_info.description} />
            <ProjectsForm cv_data={cv_data.projects} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default AdamTemplate;
