// *Components

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import AdamTemplate from "./AdamTemplate";
import { CvData } from "../../../types/initialCVData";

export const Preview = ({ cv_data }: { cv_data: CvData }) => {
  return (
    <div className="h-screen px-10 py-6">
      {/* CV container */}
      <PDFViewer width={"100%"} height={"100%"}>
        <AdamTemplate cv_data={cv_data} />
      </PDFViewer>

      {/* <PDFDownloadLink document={<AdamTemplate />} fileName="yourCV.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink> */}
    </div>
  );
};
