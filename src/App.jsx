import { useState } from "react";
import "../src/App.css";
import CourseList from "./Component/CourseList";



function App() {
  return (
    <div>
      <h1>my courses</h1>
      <CourseList/>
    </div>
  );
}

export default App;
