import { Text, View } from "@react-pdf/renderer";
import { tw } from "../CvPreview";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={tw("")}>
      <Text
        style={tw(
          "border-b-2 border-y-cyan-600 text-lg font-bold uppercase text-cyan-600",
        )}
      >
        {children}
      </Text>

      <div className="inline"></div>
    </View>
  );
};

export default SectionTitle;
