import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
