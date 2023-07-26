import React from "react";

export default function SearchComponent({ handleChange }) {
  //   const handleChange = (event) => {
  //     console.log(event.value); // event.target vrati prvek{klavesu}, na kterou klikl
  //   };
  return (
    <div>
      <input onChange={handleChange} type="search" placeholder="search..." />
    </div>
  );
}
