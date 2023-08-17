import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

import { Text, View } from "@react-pdf/renderer";

import { CvData } from "../../../types/initialCVData";
import { tw } from "../style/tailwind_react_pdf";

interface ProjectProps {
  project_name: string;
  demo: string;
  source: string;
  description: string[];
  tools: string[];
}

const Project = ({ project_name, source, demo, description, tools }: ProjectProps) => {
  return (
    <View style={tw("text-[0.75rem]")}>
      <View style={tw("flex flex-row flex-wrap mb-1")}>
        <Text style={tw("font-robotobold text-[0.90rem]")}>
          {project_name} -
          <Text style={tw("font-roboto text-[0.8rem]")}> {tools.map((tool) => tool.toLowerCase()).join(", ")}</Text>
        </Text>
        {/* <Text style={tw("text-[0.8rem]")}>{tools.join(", ")}</Text> */}
      </View>

      <Text>
        {`\u2022`} Source: {source}
      </Text>
      {description.map((item, index) => (
        <Text key={index}>
          {`\u2022`} {item}
        </Text>
      ))}
      <Text>• Live: {demo}</Text>
    </View>
  );
};

const ProjectsForm = ({ cv_data }: { cv_data: CvData["projects"] }) => {
  return (
    <SectionView>
      <SectionTitle>Projects</SectionTitle>
      <SectionContent>
        {cv_data.map((project, index) => (
          <Project
            key={index}
            project_name={project.name}
            demo={project.demo}
            source={project.source}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </SectionContent>
    </SectionView>
  );
};

export default ProjectsForm;
