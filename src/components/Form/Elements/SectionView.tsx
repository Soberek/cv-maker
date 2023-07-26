import { View } from "@react-pdf/renderer";
import { tw } from "../CvPreview";

const SectionView = ({ children }: { children: React.ReactNode }) => {
  return <View style={tw("flex flex-col px-6")}>{children}</View>;
};

export default SectionView;
