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
`

export default StyledTodo;
