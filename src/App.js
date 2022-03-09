import "./App.css";
import { useState } from "react";
import { Users } from "./users";
import Tables from "./Tables";

function App() {
  const [value, setValue] = useState("");
  const keys = ["first_name","last_name","email"];

  const getValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const search = (data) => {
    return data.filter(
      (item) =>
      keys.some((key)=>item[key].toLowerCase().includes(value))
        // item.first_name.toLowerCase().includes(value) ||
        // item.last_name.toLowerCase().includes(value) ||
        // item.email.toLowerCase().includes(value)
    );
  };
  return (
    <div className="App">
      <h2>Search Filter</h2>
      <input
        className="search"
        type="text"
        placeholder="Search...."
        value={value}
        onChange={getValue}
      />

      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(value)
        ).map((user) => (
          <li>{user.first_name}</li>
        ))}
      </ul> */}
      <Tables data={search(Users)} />
    </div>
  );
}

export default App;
