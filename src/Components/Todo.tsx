import { styled } from "styled-components";
import Handle from "./Handle";
import Check from "./Check";

interface TodoProps {
  className?: string;
  name: string;
  subtaskText: string;

}

const Todo = ({ className, name }: TodoProps) => {
  return (
    <li className={className}>
      <Handle />

      <div className="todo-name-container" style={{ display: 'flex' }}>

        {name}

        <button className="add-subtask">
          <div className="subtask-icon">
          </div>
          Add Subtask
        </button>

        <SubTask/>

      </div>
      <Check />

    </li>
  );
};

 const SubTask = ({ subtaskText }: TodoProps) => {
   return (
     <div className="subtask-container"> 

      <div className="subtask-text"> {subtaskText} </div>

      <Check />

    </div>
   );
 };


const StyledTodo = styled(Todo)`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.grey4};
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  font-style: bold;
  font-size: 16px;
  padding: 20px;
  margin: 15px 0;
  border-radius: 15px;

  div.todo-name-container {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
  }

  button.add-subtask{
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border: none;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.grey3};
  font-weight: 400;
  font-style: bold;
  font-size: 14px;
  cursor: pointer;
}
  div.subtask-icon {
  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 15px;
    height: 15px;
    margin-left: 0px;
    margin-right: 5px;
    background-image: url("Plus_Circle.svg");
    background-size: contain;
    content: "";

  }


  div.subtask-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  div.subtext-text {
    
  display:flex;
  flex-direction: column;
  align-items: center;

 }

`;

// const StyledSubTask = styled(subtask)`

//   color: ${(props) => props.theme.colors.text};
//   font-weight: 400;
//   font-size: 14px;
//   margin-left: 10px;



// `;



export default StyledTodo;
