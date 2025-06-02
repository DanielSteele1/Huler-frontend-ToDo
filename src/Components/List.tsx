import styled from "styled-components";
import Todo from "./Todo";
//import Completed from "./Completed";
import { Item } from '../types';

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Droppable from "../Droppable";

interface ListProps {
  className?: string;
  title: string;
  items: Item[];
  id: string;
  onToggleItemCompleted?: (id: number) => void;  // prop for toggling item completion

}

const List = ({ id, className, title, items, onToggleItemCompleted }: ListProps) => {
  return (
    <>
      <Droppable id={id}>
        <div className={className}>
          <h2>{title}</h2>            <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
            <ul>
              {items.map((item) => (
                <Todo
                  id={item.id}
                  name={item.name}
                  key={item.id}
                  isCompleted={item.isCompleted ?? false}
                  onToggleItemCompleted={() => onToggleItemCompleted?.(item.id)}
                />
                
              ))}
            </ul>
          </SortableContext>
        </div>
      </Droppable>

    </>
  );
};

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey2};
  padding: 30px 0;
  h2 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.grey3};
    font-size: 24px;
  }
    
`;

export default StyledList;
