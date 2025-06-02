
import { useDroppable } from '@dnd-kit/core';
interface DroppableProps {

    id: string;
    children: React.ReactNode;
}


function Droppable({ id, children }: DroppableProps) {
    const { setNodeRef } = useDroppable({ id});

    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
        padding: '10px'

    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}

// finish drag and drop TODAY
// now you need to work on the subtasks

export default Droppable;