import { View } from "@react-pdf/renderer";
import { tw } from "../../CvPreview";

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return <View style={tw("mt-4 mb-4 text-sm")}>{children}</View>;
};

export default SectionContent;
