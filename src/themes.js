import faviconDark from "./images/favicon-dark.png"
import faviconLight from "./images/favicon-light.png"

const sizes = {
  bPoint: 600,
  padding: 60
}

const dark = {
  accentColor: "#fbebad",
  bgColor: "#060606",
  textColor: "#eee",
  favicon: faviconDark,
  ...sizes
}

const light = {
  accentColor: "#3e54fa",
  bgColor: "#fff",
  textColor: "#000",
  favicon: faviconLight,
  ...sizes
}

export const getTheme = (h = new Date().getHours()) =>
  h > 7 && h < 18 ? light : dark

export const defaultTheme = light
