import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../Theming/theme";
import { Reset } from "styled-reset";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&display=swap');
    html {
      background-color: ${(props) => props.theme.colors.grey2};
      font-family: ${(props) =>
        props.theme.fonts.primary}, sans-serif !important;
      color: ${(props) => props.theme.colors.text};
    }
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
