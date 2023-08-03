import { initialCVDataI } from "../../../types/initialCVData";
import SectionContent from "./elements/SectionContent";
import SectionTitle from "./elements/SectionTitle";
import SectionView from "./elements/SectionView";

import { Text } from "@react-pdf/renderer";

type ProfileFormPropsI = Pick<initialCVDataI["personal_info"], "description">;

const ProfileForm = ({ description }: ProfileFormPropsI) => {
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
