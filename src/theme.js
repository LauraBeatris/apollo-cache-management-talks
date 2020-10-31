import { github } from "@code-surfer/themes";

const theme = {
  ...github,
  googleFont: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap",
  fonts: {
    body: '"Quicksand", Open Sans',
  },
  styles: {
    h1: {
      textAlign: "center"
    }
  }
};

export default theme;