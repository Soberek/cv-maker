import { Font } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import roboto_black from "../../../assets/fonts/Roboto-BlackItalic.ttf";
import roboto_bold from "../../../assets/fonts/Roboto-Bold.ttf";
import roboto_regular from "../../../assets/fonts/Roboto-Regular.ttf";

Font.register({ family: "Roboto-Black", src: roboto_black });
Font.register({ family: "Roboto-Bold", src: roboto_bold });
Font.register({ family: "Roboto-Regular", src: roboto_regular });

export const tw = createTw({
  theme: {
    fontFamily: {
      robotoblack: ["Roboto-Black"],
      robotobold: ["Roboto-Bold"],
      roboto: ["Roboto-Regular"],
    },

    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});
