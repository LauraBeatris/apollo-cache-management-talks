import { github, dracula } from "@code-surfer/themes";

const sharedTheme = {
  googleFont: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap",
  fonts: {
    body: '"Quicksand", Open Sans',
  },
  styles: {
    h1: {
      textAlign: "center"
    },
    h2: {
      textAlign: "center"
    },
    h3: {
      textAlign: "center"
    },
    h4: {
      textAlign: "center"
    },
    a: {
      textAlign: "center",
      fontSize: 20,
      color: "#1DA1F2"
    }
  }
};

export const apolloDayTheme = {
  ...github,
  ...sharedTheme, 
}

export const rocketseatTheme = {
  ...dracula,
  sharedTheme
}