import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

import { Text, View } from "@react-pdf/renderer";

import { initialCVDataI } from "../../../types/initialCVData";
import { tw } from "../style/tailwind_react_pdf";

interface ProjectI {
  project_name: string;
  demo: string;
  source: string;
  description: string[];
}

const Project = ({ project_name, source, demo, description }: ProjectI) => {
  return (
    <View style={tw("text-[0.75rem]")}>
      <Text style={tw("font-robotobold text-[0.90rem]")}>{project_name}</Text>
      <Text>• Source: {source}</Text>
      {description.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}
      <Text>• Live: {demo}</Text>
    </View>
  );
};

const ProjectsForm = ({ cv_data }: { cv_data: initialCVDataI["projects"] }) => {
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
          />
        ))}
      </SectionContent>
    </SectionView>
  );
};

export default ProjectsForm;
