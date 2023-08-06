import { View } from "@react-pdf/renderer";
import { tw } from "../../style/tailwind_react_pdf";

const SectionView = ({ children }: { children: React.ReactNode }) => {
  return <View style={tw("flex flex-col mb-2")}>{children}</View>;
};

export default SectionView;
