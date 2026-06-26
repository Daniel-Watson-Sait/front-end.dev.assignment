'use client'
import React, { useState } from "react";
import StudentList from "./components/StudentList";
import students from "@/data/students.json";
import StudentForm from "./components/StudentForm";

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
