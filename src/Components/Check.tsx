import styled from "styled-components";

const Check = styled.button`
  background: none;
  border: none;
  -webkit-appearance: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-image: url("Task_Empty.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.theme.colors.grey4};

    &:hover {
        background-image: url("Task_Hover.svg");
    }

    &:active {
        background-image: url("Task_Selected.svg");
    }
}
`;

export default Check;
