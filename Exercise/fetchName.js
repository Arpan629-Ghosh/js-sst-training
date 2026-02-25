import employees from "./config.js";

const ITEmp = () => {
  const ITEmployee = [];
  let i = 0;
  for (let emp of employees) {
    if (emp.department === "IT") {
      ITEmployee[i] = emp.name;
      i++;
    }
  }
  return ITEmployee;
};

console.log(ITEmp());
