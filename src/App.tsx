import { useState, useEffect } from "react";
import Header from "./Components/Layout/Header";
import Layout from "./Components/Layout/Layout";
import List from "./Components/List";
import AddTodo from "./Components/AddTodo";
import { Item } from "./types";
import Main from "./Components/Layout/Main";

// Dnd-Kit imports
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";

const initialItems: Item[] = [
  { id: 1, name: "Write documentation for new website" },
  { id: 2, name: "Speak to Dave about code review process" },
  { id: 3, name: "Plan project show and tell" },
  { id: 4, name: "Buy Tessa a birthday card" }
];
const initialCompletedItems: Item[] = [
  { id: 1, name: "Annual leave request for Holiday" },
  { id: 2, name: "Learn more about Typescript" },
  { id: 3, name: "Do some christmas shopping" }
];

export default function App() {


  // saved items into localStorage - meaning it wont disappear on refresh
  const [items, setItems] = useState(() => {

    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : initialItems;

  });

  const [completedItems] = useState(initialCompletedItems);

  const onSubmit = (name: string) => {
    setItems([...items, { id: Date.now() , name }]);    // changed the ID from '1' for every item to a unique timestamp.
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const toggleItemCompletion = (id: number) => {

    setItems((prev: Item[]) => 
      prev.map((item: Item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    )
    );
  }


  // Removed useEffect - this was stopping tasks from being added

  // useEffect(() => {
  //   setItems(initialItems);
  // }, [items]);

  return (
    <div className="App">
      <Layout>
        <Header />
        <Main>
          <DndContext>

            <AddTodo onSubmit={onSubmit} />

            <Droppable>

              <Draggable> 
              <List title="Todo" items={items} />
              </Draggable>

              <List title="Completed" items={completedItems} />

            </Droppable>

          </DndContext>
        </Main>
      </Layout>
    </div>
  );
}
