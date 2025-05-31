import styled from "styled-components";

interface CheckProps {
    isCompleted: boolean;
    onToggleItemCompleted: () => void;
}

const Check = ({ isCompleted, onToggleItemCompleted }: CheckProps) => {
    return (
        <StyledCheckButton
            onClick={onToggleItemCompleted}
            $isCompleted={isCompleted}
        />
    );
};

export default Check;

const StyledCheckButton = styled.button<{ $isCompleted: boolean }>`
  display: flex;
  height: 35px;
  width: 35px;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.grey4};

  background-image: ${(props) =>
  props.$isCompleted
    ? `url("Task_Selected.svg")`
    : `url("Task_Empty.svg")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-image: url("Task_Hover.svg");
  }

  &:active {
    background-image: url("Task_Selected.svg");
  }
`;