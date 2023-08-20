import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

import { Link, Text, View } from "@react-pdf/renderer";

import { CvData } from "../../../types/initialCVData";
import { tw } from "../style/tailwind_react_pdf";

type ProjectProps = {
  project_name: string;
  demo: string;
  source: string;
  description: string[];
  tools: { name: string }[];
};

const Project = ({ project_name, source, demo, description, tools }: ProjectProps) => {
  return (
    <View style={tw("text-[0.75rem]")}>
      <View style={tw("flex flex-row flex-wrap mb-1")}>
        <Text style={tw("font-robotobold text-[0.90rem]")}>
          {project_name} -
          <Text style={tw("font-roboto text-[0.8rem]")}>
            {" "}
            {tools.length && tools.map((tool) => tool.name.toLowerCase()).join(", ")}
          </Text>
        </Text>
        {/* <Text style={tw("text-[0.8rem]")}>{tools.join(", ")}</Text> */}
      </View>

      {source.trim() && (
        <Text>
          {`\u2022`} Source:{" "}
          <Link style={tw(`text-black no-underline`)} src={source}>
            Link
          </Link>
        </Text>
      )}

      {description.map((item, index) => (
        <Text key={index}>
          {`\u2022`} {item}
        </Text>
      ))}

      {demo.trim() && (
        <Text>
          {`\u2022`} Live:
          <Link style={tw(`text-black no-underline`)} src={demo}>
            {" "}
            Link
          </Link>
        </Text>
      )}
    </View>
  );
};

const ProjectsForm = ({ cv_data }: { cv_data: CvData["projects"] }) => {
  return (
    <SectionView>
      <SectionTitle>Projects</SectionTitle>
      <SectionContent>
        {cv_data &&
          cv_data.map((project, index) => (
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
