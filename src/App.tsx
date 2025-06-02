import { useState, useEffect } from "react";
import Header from "./Components/Layout/Header";
import Layout from "./Components/Layout/Layout";
import List from "./Components/List";
import AddTodo from "./Components/AddTodo";
import { Item } from "./types";
import Main from "./Components/Layout/Main";

// Dnd-kit
import { arrayMove } from "@dnd-kit/sortable";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core";

// attempted to fix the bug of initialItems also dragging completed items when dragged. 
// it had to do with id's not being unique - for now i settled to just give initial completed items different numbers, but i had looked into a unique id library
// called uuid. 
// user generated items have a unique timestamp for their ID. 

const initialItems: Item[] = [
  { id: 1, name: "Write documentation for new website" },
  { id: 2, name: "Speak to Dave about code review process" },
  { id: 3, name: "Plan project show and tell" },
  { id: 4, name: "Buy Tessa a birthday card" }
];
const initialCompletedItems: Item[] = [
  { id: 5, name: "Annual leave request for Holiday" },
  { id: 6, name: "Learn more about Typescript" },
  { id: 7, name: "Do some christmas shopping" }
];

export default function App() {

  // saved items into localStorage - meaning items wont disappear on refresh
  const [items, setItems] = useState(() => {

    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : initialItems;

  });

  const [completedItems] = useState(initialCompletedItems);

  const onSubmit = (name: string) => {
    setItems([...items, { id: Date.now(), name }]);
    // changed the ID from '1' for every user generated item to a unique timestamp.
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  // toggles if an item is completed or not 
  // updates the state of each item - if the item matches then isCompleted is toggled. otherwise item is left unchanged
  const toggleItemCompleted = (id: number) => {

    setItems((prev: Item[]) =>
      prev.map((item: Item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  // handle drag end - This is what lets the user drop a task in any given place.

  // -- BUGS -- 
  //- the dragged item will also not drop where you expect it to - it instead defaults to the bottom of the list.
  //- this also only applies to the todo list as it takes the items array - the completed list takes completedItems

  const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;

    if (!over) return;

    console.log(active, over);

    const oldIndex = items.findIndex((item: { id: UniqueIdentifier; }) => item.id === active.id);
    const newIndex = items.findIndex((item: { id: UniqueIdentifier; }) => item.id === over.id);
    setItems((items: unknown[]) => arrayMove(items, oldIndex, newIndex));

  };
  // Removed useEffect - this was stopping tasks from being added

  // useEffect(() => {
  //   setItems(initialItems);
  // }, [items]);

  return (
    <div className="App">
      <Layout>
        <Header />
        <DndContext onDragEnd={handleDragEnd}>
          <Main>
            <AddTodo onSubmit={onSubmit} />
            <List
              id="todo-list"
              title="Todo"
              items={items}
              onToggleItemCompleted={toggleItemCompleted} />
            <List
              id="completed-list"
              title="Completed"
              items={completedItems}
              onToggleItemCompleted={toggleItemCompleted} />
          </Main>
        </DndContext>
      </Layout>
    </div>
  );
}
