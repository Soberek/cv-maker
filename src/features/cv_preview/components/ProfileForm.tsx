import SectionContent from "./elements/SectionContent";
import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";

import { Text } from "@react-pdf/renderer";

const ProfileForm = () => {
  return (
    <SectionView>
      <SectionTitle>Profile</SectionTitle>
      <SectionContent>
        <Text>Yo</Text>
      </SectionContent>
    </SectionView>
  );
};

export default ProfileForm;
