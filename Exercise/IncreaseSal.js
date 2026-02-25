import employees from "./config.js";

const incSal = () => {
  return employees.map((emp) => {
    const IncSal = emp.salary * 1.1;

    return {
      ...emp,
      salary: IncSal,
    };
  });
};

console.log(incSal());
