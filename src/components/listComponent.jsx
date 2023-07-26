import React from "react";
import students from "../students.json";

export default function ListComponent({ searchString }) {
  const filteredStudents = students.filter((student) => {
    return student.name.toLocaleLowerCase().includes(searchString);
  });

  return (
    <div>
      {filteredStudents.map((student) => {
        return (
          <div key={student.id}>
            {student.name} - {student.email}
          </div>
        );
      })}
    </div>
  );
}
