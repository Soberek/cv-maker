import { useState } from "react";
import { CvData } from "../../../types/initialCVData";

const usePanel = (initial_panel: keyof CvData) => {
  const [active_panel, setPanel] = useState<keyof CvData>(initial_panel);

  const handlePanelChange = (panel: keyof CvData) => {
    setPanel(panel);
  };

  return { active_panel, handlePanelChange };
};

export default usePanel;
