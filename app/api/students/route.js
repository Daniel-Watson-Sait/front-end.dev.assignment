import studentsData from "@/data/students.json";

let students = [...studentsData]; // load existing students

export async function GET() {
  return Response.json(students);
}

export async function POST(request) {
  const newStudent = await request.json();
  students.push(newStudent);
  return Response.json({ success: true });
}
