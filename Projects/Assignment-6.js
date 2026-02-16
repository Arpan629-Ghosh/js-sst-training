function processStudent(student) {
  const formattedName =
    student.name.trim().charAt(0).toUpperCase() +
    student.name.trim().slice(1).toLowerCase();

  const salary = Number(student.salary);

  const isFuture = new Date(student.interviewDate) > new Date();

  return {
    name: formattedName,
    salary: salary,
    interviewDate: isFuture,
  };
}

const student = {
  name: "  arpan  ",
  salary: "50000",
  interviewDate: "2026-03-01",
};

console.log(processStudent(student));
