import { headingStyle } from "./headingStyles"
import { breadcrumbStyle } from "./breadcrumbStyles"
import { pageContainer } from "./pageContainer"
import { textStyle } from "./textStyles"

const breakpoints = {
  sm: "48em",
  md: "62em",
  lg: "80em",
  xl: "96em",
}
const overrideTheme = {
  components: {
    ...headingStyle,
    ...breadcrumbStyle,
    ...pageContainer,
    ...textStyle,
  },
  colors: {
    text: {
      base: "#FFFFFF",
      body: "#838694",
      headline: "#1b1f2e",
      redHead: "rgba(244, 48, 48, 0.9)",
    },
    light_bg: {
      blue: "#122A75",
    },
  },
  breakpoints,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  layerStyles: {},
  textStyles: {
    p: {
      color: "white",
    },

    a: {
      color: "white",
    },
  },
  icons: {},
}
export default overrideTheme
