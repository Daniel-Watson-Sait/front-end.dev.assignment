"use client";
import React, { useState, useEffect } from "react";

export default function StudentForm({onAddStudent}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();

        await fetch("/api/students", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, dob, grade }),
    });

    setFirstName("");
    setLastName("");
    setDob("");
    setGrade("");

    if (onAddStudent) 
      onAddStudent();
    }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <p className="text-2xl font-bold mb-4">Add Student</p>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Student
        </button>
      </form>
    </div>
  );
};
