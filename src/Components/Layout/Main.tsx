import styled from "styled-components";

// responsive viewports - used the breakpoints provided
export default styled.section`
  display: block;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  

   @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 10px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    padding: 100px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 50px;
  }
`;
