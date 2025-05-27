import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../Theming/theme";
import { Reset } from "styled-reset";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    html {
      background-color: ${(props) => props.theme.colors.grey2};
      font-family: ${(props) =>
        props.theme.fonts.primary}, 'Poppins', sans-serif !important;
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
