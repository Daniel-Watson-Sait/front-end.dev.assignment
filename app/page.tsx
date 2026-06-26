/** 
 * Names: Daniel Watson, Echo Salonga, Daniel Tollis
 * Date: June 26, 2026
 * Description:
 * - This is the overall main page of the Student Portal.
 * - It displays the list of students along with a form to add new students to the list.
 * 
 * Inputs:
 * - Imports all student data from students.json.
 * - Retrieves new student data from the StudentForm through onAddStudent callback prop.
 * 
 * Processing:
 * - Page updates when new students are added.
 * - New added student appends to existing list.
 * 
 * Outputs:
 * - Renders StudentList component to display all current students and their info.
 * - Renders StudentForm component so users can input new students to add.
 * - TailWind CSS layout to display both components together.
*/

'use client'
import React, { useState } from "react";
import StudentList from "./components/StudentList";
import students from "@/data/students.json";
import StudentForm from "./components/StudentForm";

// Main Page //
export default function Home() {
  const [studentList, setStudentList] = useState(students);

  function addStudent(newStudent: any) {
    setStudentList((prev) => [...prev, newStudent]);
  }

  return (
    <div className="flex flex-1 justify-center items-center gap-6 p-6">
      <div className="w-full max-w-xl">
        <StudentList students={studentList} />
      </div>

      <div className="w-full max-w-md">
        <StudentForm onAddStudent={addStudent} />
      </div>
    </div>
  );
}
