import "./App.css";
import Login from "./pages/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Login />
      <h2>Todo List</h2>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
