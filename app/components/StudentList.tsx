import React from "react";

interface Student {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  grade: number;
}

interface StudentListProps {
  students: Student[];
}

const StudentList = ({ students }: StudentListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Students</h2>

      {students.map((students, index) => (
        <div key={index} className="border p-3 mb-2">
          <p>
            {students.firstName} {students.lastName}
          </p>
          <p>Date of Birth: {students.dateOfBirth}</p>
          <p>Grade: {students.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;