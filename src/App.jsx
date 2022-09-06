import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="grid w-full place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />

        <div className=" mx-auto max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
