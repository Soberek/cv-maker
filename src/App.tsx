import { Preview } from "./features/cv_preview";
import { Panel } from "./features/cv_panel";
import { useState } from "react";
import { initialCVData } from "./data/initialCVData";

function App() {
  const [data, setData] = useState(initialCVData);

  // get here data from panel and send them to cv_preview component

  return (
    <div className="bg-gray-800 md:flex">
      <div className="md:w-1/2">
        <Panel cv_data={data} />
      </div>

      <div className="md:w-1/2">
        <Preview cv_data={data} />
      </div>
    </div>
  );
}

export default App;
