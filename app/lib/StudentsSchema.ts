import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  grade: z
    .number({
      required_error: "Grade must be a number",
    })
    .refine((val) => val !== undefined && val !== null, {
      message: "Grade is required",
    })
    .min(1, "Grade must be at least 1")
    .max(12, "Grade cannot be higher than 12"),
});

export type StudentData = z.infer<typeof studentSchema>;
