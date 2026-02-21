class Employee {
  constructor(id, name, baseSalary) {
    this.id = id;
    this.name = name;
    this.baseSalary = baseSalary;
  }

  calculateSalary() {
    return this.baseSalary;
  }

  getDetails() {
    return `${this.name} (ID: ${this.id})`;
  }
}

class Manager extends Employee {
  constructor(id, name, baseSalary, bonus) {
    super(id, name, baseSalary);
    this.bonus = bonus;
  }

  calculateSalary() {
    return this.baseSalary + this.bonus;
  }
}

const emp = new Employee(1, "Arpan", 30000);
const manager = new Manager(2, "Rahul", 50000, 15000);

console.log(emp.calculateSalary());
console.log(manager.calculateSalary());
