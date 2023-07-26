import React, { useState } from "react";

export default function Welcome(props) {
  //   const person = { name: "Pepa", lastName: "Novak" };
  const [title, setTitle] = useState("Default"); //stav muze byt jednoducha promenna nebo objeckt
  //  const showTitle=title[0];
  //  const updateTitle=title[1];
  const changeTitle = () => {
    setTitle("New title");
  };
  return (
    <div>
      <h1>Title: {title} </h1>
      Welcome to my App: {props.person?.name}
      <h2>First Name : {props.person?.name}</h2>
      <h3>Last Name: {props.person?.lastName}</h3>
      <button onClick={changeTitle}>Click Me</button>
    </div>
  );
}
//handleClick()=>prirazeni reference  tzn. ze se udela jeste pred zobrazenim stranky
//handleClick =>volani funkce
//stav je uzavren vzdy uzavren jen pro jednu ...je to reakce treba na click

