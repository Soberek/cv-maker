// *Components

import { createTw } from "react-pdf-tailwind";
import { PDFViewer } from "@react-pdf/renderer";

import AdamTemplate from "./components/AdamTemplate";

export const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },

    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const CvPreview = () => {
  return (
    <>
      {/* CV container */}
      <PDFViewer width={"100%"} height={"700px"}>
        <AdamTemplate />
      </PDFViewer>

      {/* <PDFDownloadLink document={<AdamTemplate />} fileName="yourCV.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink> */}
    </>
  );
};

export default CvPreview;
