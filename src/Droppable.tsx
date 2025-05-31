import { useDraggable } from '@dnd-kit/core';



// quick ones for tomorrow 

// add in the strikethrough for completed items
// add the ability to drag and drop items between lists

// for sunday :

// 

// finish drag and drop TODAY
// now you need to work on the subtasks


function Droppable({ id, children }) {

    return (


        <div {...useDraggable({ id })}>
            {children}
        </div>
    )
}

export default Droppable;