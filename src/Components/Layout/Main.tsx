import styled from "styled-components";

export default styled.section`
  display: block;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    padding: 150px;
  }
`;
