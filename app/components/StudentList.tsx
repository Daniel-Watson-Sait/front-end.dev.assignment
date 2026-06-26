/** 
 * Names: Daniel Watson, Echo Salonga, Daniel Tollis
 * Date: June 26, 2026
 * Description:
 * - Displays a list of students with all information.
 * 
 * Inputs:
 * Receives an array of students as a prop, requiring first name, last name, date of birth, and grade information.
 * 
 * Processing:
 * - Uses .map() to loop through array for formatting student data.
 * - TailWind CSS used to create section displaying each student and their info.
 * 
 * Outputs:
 * - Returns a rendered list of all students and their information.
*/

import React from "react";

// Student List Component //
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