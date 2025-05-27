import { useState, useEffect } from "react";
import Header from "./Components/Layout/Header";
import Layout from "./Components/Layout/Layout";
import List from "./Components/List";
import AddTodo from "./Components/AddTodo";
import { Item } from "./types";
import Main from "./Components/Layout/Main";

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
  const [items, setItems] = useState(initialItems);
  const [completedItems] = useState(initialCompletedItems);

  const onSubmit = (name: string) => {
    setItems([...items, { id: 1, name }]);
  };

  useEffect(() => {
    setItems(initialItems);
  }, [items]);

  return (
    <div className="App">
      <Layout>
        <Header />
        <Main>
          <AddTodo onSubmit={onSubmit} />
          <List title="Todo" items={items} />
          <List title="Completed" items={completedItems} />
        </Main>
      </Layout>
    </div>
  );
}
