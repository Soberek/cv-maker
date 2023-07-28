import { Text, View } from "@react-pdf/renderer";
import { tw } from "../../style/tailwind_react_pdf";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <Text
        style={tw(
          "border-b-2 pb-1 text-[0.85rem] uppercase tracking-[0.2rem] font-robotobold",
        )}
      >
        {children}
      </Text>
    </View>
  );
};

export default SectionTitle;
