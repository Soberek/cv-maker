// *Components

import { PDFViewer } from "@react-pdf/renderer";

import AdamTemplate from "./AdamTemplate";
import { CvData } from "../../../types/initialCVData";

export const Preview = ({ cv_data }: { cv_data: CvData }) => {
  return (
    <div className="h-screen px-2 py-6 md:px-10">
      {/* CV container */}
      <PDFViewer
        width={"100%"}
        height={"100%"}
        // showToolbar={false}
      >
        <AdamTemplate cv_data={cv_data} />
      </PDFViewer>
    </div>
  );
};
