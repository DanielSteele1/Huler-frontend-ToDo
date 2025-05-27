import styled from "styled-components";

const Handle = styled.button`
  background: none;
  border: none;
  -webkit-appearance: none;
  margin-right: 24px;
  cursor: grabbing;
  width: 10px;
  height: 16px;
  background-image: url("Handle.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Handle;
