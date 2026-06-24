import Image from "next/image";
import StudentList from "./components/StudentList";
import students from "@/data/students.json";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center gap-6 p-6">
      <div className="w-full max-w-xl">
        <StudentList students={students} />
      </div>

      <div className="w-full max-w-md">
        {/* Form here */}
        <h1>Form</h1>
      </div>
    </div>
  );
}
