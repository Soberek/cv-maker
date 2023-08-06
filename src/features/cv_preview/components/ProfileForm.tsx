import { CvData } from "../../../types/initialCVData";
import SectionContent from "./elements/SectionContent";
import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";

import { Text } from "@react-pdf/renderer";

type ProfileFormProps = Pick<CvData["personal_info"], "description">;

const ProfileForm = ({ description }: ProfileFormProps) => {
  return (
    <SectionView>
      <SectionTitle>Profile</SectionTitle>
      <SectionContent>
        <Text>{description}</Text>
      </SectionContent>
    </SectionView>
  );
};

export default ProfileForm;
