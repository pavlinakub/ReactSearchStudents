import "./App.css";
import ListComponent from "./components/listComponent";
//import Welcome from "./components/welcome";
import SearchComponent from "./components/searchComponent";
import { useState } from "react";

function App() {
  // const person = { name: "Pepa", lastName: "Novak" };
  // const secondPerson = { name: "tom", lastName: "dvorak" };

  //console.log(props);

  // const handleClick = () => {
  //   console.log("button clicked");
  // };
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      <h1>Hello Students</h1>
      <SearchComponent handleChange={handleChange} />
      <ListComponent searchString={searchField} />
    </div>
  );
}

export default App;
