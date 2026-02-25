import employees from "./config.js";

const hieghstSal = () => {
  const maxSal = employees.reduce((acc, emp) => {
    return acc < emp.salary ? (acc = emp.salary) : (acc = acc);
  }, 0);

  for (let emp of employees) {
    if (emp.salary === maxSal) {
      return emp;
    }
  }
};

console.log(hieghstSal());
