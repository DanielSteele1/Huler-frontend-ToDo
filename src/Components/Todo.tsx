import { styled } from "styled-components";
import Handle from "./Handle";

interface TodoProps {
  className?: string;
  name: string;
}

const Todo = ({ className, name }: TodoProps) => {
  return (
    <li className={className}>
      <Handle />
      {name}
    </li>
  );
};

const StyledTodo = styled(Todo)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey4};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 16px;
  padding: 20px;
  margin: 15px 0;
  border-radius: 15px;
`;

export default StyledTodo;
