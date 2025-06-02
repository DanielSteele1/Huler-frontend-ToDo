import { styled } from "styled-components";
import Handle from "./Handle";
import StyledCheck from "./Check";

import { useDraggable } from "@dnd-kit/core";

interface CompletedProps {
  className?: string;
  name: string;
  id: number;
  //subtaskText: string;
  isCompleted: boolean;
  onToggleItemCompleted: () => void;  // prop for toggling item completion

}

const Completed = ({ className, name, isCompleted, onToggleItemCompleted, id }: CompletedProps) => {


  // added Draggable.tsx code directly into Todo.tsx - this is becuase I needed to pass attributes and listeners to the Handle, 
  // but they were in Draggable.tsx 

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    transition: "transform 50ms ease",
  };

  return (
    
      <li ref={setNodeRef} style={style} className={className}>
        <Handle {...listeners} {...attributes} />

        <div className="completed-name-container" style={{ display: 'flex' }}>

          <span
            className="heading-text"
            style={{
              textDecoration: isCompleted ? 'line-through' : 'none'   // if completed task, cross out the heading 
            }}
          >
            {name}
          </span>

          {/* <button className="add-subtask">
          <div className="subtask-icon">
          </div>
          Add Subtask
        </button>

        <SubTask/> */}

        </div>
        <StyledCheck
          isCompleted={isCompleted}
          onToggleItemCompleted={onToggleItemCompleted} />

      </li>

  );
};

//  const SubTask = ({ subtaskText }: TodoProps) => {
//    return (
//      <div className="subtask-container"> 

//       <div className="subtask-text"> {subtaskText} </div>

//       <Check />

//     </div>
//    );
//  };


const StyledCompleted = styled(Completed)`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.grey4};
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  font-size: 16px;
  padding: 20px;
  margin: 15px 0;
  border-radius: 15px;

  div.completed-name-container {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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

export default StyledCompleted;
