const users = [
  { name: "Arpan", age: 21, active: true },
  { name: "Ram", age: 17, active: true },
  { name: "Shyam", age: 25, active: false },
];

const result = users.reduce(
  (acc, user) => {
    acc[user.active ? "active" : "inactive"]++;
    return acc;
  },
  { active: 0, inactive: 0 },
);

console.log(result);

const ans = users.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user);
  return acc;
}, {});

console.log(ans);

const groupByActive = users.reduce((acc, user) => {
  if (!acc[user.active]) {
    acc[user.active] = [];
  }
  acc[user.active].push(user);
  return acc;
}, {});

console.log(groupByActive);
