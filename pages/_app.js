import App from "next/app";
import { ThemeProvider } from "styled-components";

import "./styles.css";

const theme = {
  colors: {
    primary: "#00833e",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
