import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";
import SectionContent from "./elements/SectionContent";

import { Text } from "@react-pdf/renderer";

const ProjectsForm = () => {
  return (
    <SectionView>
      <SectionTitle>Projects</SectionTitle>
      <SectionContent>
        <Text>Yo</Text>
      </SectionContent>
    </SectionView>
  );
};

export default ProjectsForm;
