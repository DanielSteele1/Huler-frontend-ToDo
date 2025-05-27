import { FormEvent, useState } from "react";
import styled from "styled-components";

interface AddTodoProps {
  className?: string;
  onSubmit: (name: string) => void;
}

const AddTodo = ({ className, onSubmit }: AddTodoProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className={className}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="Enter new Todo..."
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" />
      </form>
    </div>
  );
};

const StyledAddTodo = styled(AddTodo)`
  width: 100%;
  display: block;
  padding: 0;
  margin-bottom: 47px;
  z-index: ${(props) => props.theme.zLayers.overlay};
  form {
    overflow: hidden;
    display: flex;
    position: relative;
  }
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 20px;
    margin: 10px;
    background-color: ${(props) => props.theme.colors.grey2};
    border: 2px solid ${(props) => props.theme.colors.grey1};
    border-radius: 50px;
    outline: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    &::placeholder {
      color: ${(props) => props.theme.colors.grey3};
      font-weight: 400;
    }
  }
  button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background-color: #FB6664;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:before {
      background-image: url("Plus.svg");
      background-size: contain;
      content: "";
      width: 20px;
      height: 20px;
    }
  }
`;

export default StyledAddTodo;
