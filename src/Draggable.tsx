import { useDraggable } from '@dnd-kit/core';




function Draggable({ id, children}) {


    return (

        <div {...useDraggable({ id })}>
            {children}
        </div>
    )

}




export default Draggable;

