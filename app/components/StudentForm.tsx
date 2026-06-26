"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema, type StudentData } from "../lib/StudentsSchema";

type StudentFormProps = {
  onAddStudent: (newStudent: StudentData) => void;
};

const StudentForm = ({ onAddStudent }: StudentFormProps) => {

    const{
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<StudentData>({
        resolver: zodResolver(studentSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            grade: 1,
        },
    }
    );
    function onSubmit(data: StudentData) {
        onAddStudent(data);
        reset();
    }

 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-4 rounded">
      <h2 className="text-xl font-bold">Add Student</h2>

      <div>
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="w-full border px-3 py-2 rounded"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>

      <div>
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="w-full border px-3 py-2 rounded"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div>
        <input
          type="date"
          {...register("dateOfBirth")}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
      </div>

      <div>
        <input
          type="number"
          {...register("grade", { valueAsNumber: true })}
          placeholder="Grade (1–12)"
          className="w-full border px-3 py-2 rounded"
        />
        {errors.grade && <p className="text-red-500 text-sm">{errors.grade.message}</p>}
      </div>

      <button type="submit" className="w-full bg-sky-600 text-white py-2 rounded">
        Add Student
      </button>
    </form>
  );
};
export default StudentForm;