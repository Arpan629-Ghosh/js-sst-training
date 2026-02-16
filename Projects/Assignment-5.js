const salaries = [30000, 50000, 70000, 45000];

const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
console.log(totalSalary);

const highestSalary = Math.max(...salaries);
console.log("Highest Salary:", highestSalary);
const incrementSalary = salaries.map((s) => s * 1.1);

console.log("Incremented Salary:", incrementSalary);

const filteredSalary = salaries.filter((s) => s > 50000);
console.log("Filtered Salary: ", filteredSalary);
