'use client'
import Image from "next/image";
import StudentList from "./components/StudentList";
import students from "@/data/students.json";
import StudentForm from "./components/StudentForm";
import { useEffect, useState } from "react";
export default function Home() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  
    useEffect(() => {
    async function loadStudents() {
      const res = await fetch("/api/students");
      const data = await res.json();
      setStudents(data);
    }
    loadStudents();
  }, [refresh]); 
  return (
    <div className="flex flex-1 justify-center items-center gap-6 p-6">
      <div className="w-full max-w-xl">
        <StudentList students={students} />
      </div>

      <div className="w-full max-w-md">
        <StudentForm onAddStudent={() => setRefresh(!refresh)} />
      </div>
    </div>
  );
}
