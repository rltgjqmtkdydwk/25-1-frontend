import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

export async function getStudents() {
  const response = await axios.get("/students?_expand=department");
  return response.data;
}

export async function getDepartments() {
  const response = await axios.get("/departments");
  return response.data;
}

export async function getStudent(id) {
  const response = await axios.get("/students/" + id);
  return response.data;
}

export async function putStudent(student) {
  await axios.put("/students/" + student.id, student);
}

export async function postStudent(student) {
  await axios.post("/students", student);
}

export async function deleteStudent(id) {
  await axios.delete("/students/" + id);
}
