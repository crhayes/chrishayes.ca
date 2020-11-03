export default {
  breakpoints: ["40em"],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    body: `"Source Sans Pro", sans-seif`,
    heading: `"Lora", serif`,
    monospace: `"Source Code Pro", monospace`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 56, 64, 80],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.52,
    heading: 1.25,
  },
  letterSpacings: {
    loose: 0.5,
    looser: 2,
    tight: -0.5,
    tighter: -2,
  },
  colors: {
    text: "#130303",
    background: "#fff",
    // primary: "#009BF5",
    primary: "#006aec",
    secondary: "#FFA400",
    muted: "#5f6368",
    border: "#eee",
  },
  sizes: {
    container: 1100,
    blogPostContainer: 712,
  },
  layout: {
    container: {
      px: 3,
    },
  },
  text: {
    heading: {
      marginBlockStart: "1.5em",
      mb: 0,
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  link: {
    color: "text",
    textDecoration: "none",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2,
    },
    a: {
      variant: "link",
      borderBottom: "1px solid",
      borderBottomColor: "primary",
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    h3: {
      variant: "text.heading",
      fontSize: [3, 4],
    },
    h4: {
      variant: "text.heading",
      fontSize: [2, 3],
    },
    h5: {
      variant: "text.heading",
      fontSize: [1, 2],
    },
    h6: {
      variant: "text.heading",
      fontSize: [0, 1],
    },
    p: {
      letterSpacing: "-0.003em",
      code: {
        display: "inline-flex",
        maxWidth: "100%",
        px: 1,
        fontSize: "85%",
        borderRadius: 4,
        backgroundColor: "border",
        overflow: "auto",
      },
    },
    pre: {
      p: 3,
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
      borderRadius: 10,
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}
