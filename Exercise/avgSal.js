import employees from "./config.js";

const avgSal = () => {
  const activeEmp = employees.filter((emp) => emp.active === true);
  const totalSal = activeEmp.reduce((acc, emp) => (acc += emp.salary), 0);
  return totalSal / activeEmp.length;
};

console.log(avgSal());
