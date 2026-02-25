import employees from "./config.js";

const totalSal = () => {
  const total = employees.reduce((acc, emp) => (acc += emp.salary), 0);
  return total;
};

console.log(totalSal());
