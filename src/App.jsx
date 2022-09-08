import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
// const TodoList = React.lazy(() => import("./components/TodoList"));
import store from "./redux/store";
import { Provider } from "react-redux";
import CompletedTodoList from "./components/completedTodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="grid w-full place-items-center bg-blue-100 min-h-screen px-6 font-sans">
        <Navbar />

        <div className=" mx-auto max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
        <div className=" mt-4 mx-auto max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <h3 className="text-green-500 underline">Completed Todos</h3>
          <CompletedTodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
