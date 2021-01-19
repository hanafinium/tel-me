import React, { useState } from "react";
import "./index.css";
import info from "./info.js";
import People from "./components/People";
import Input from "./components/Input";

function App() {
  const [birthdays, setBirthdays] = useState(info);
  return (
    <div id="app">
      <Input />
      <h1>{birthdays.length} birthdays today!</h1>
      <People birthdays={birthdays} />
    </div>
  );
}

export default App;
