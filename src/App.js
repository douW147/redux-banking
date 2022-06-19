import React from "react";
import "./index.css";
import Tasks from "./components/Tasks/Tasks.jsx"
import taskStore from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={taskStore}>
      <Tasks></Tasks>
    </Provider>
    
  );
}

export default App;
