const users = [
  { name: "Arpan", role: "admin" },
  { name: "Ram", role: "user" },
  { name: "Sita", role: "admin" },
  { name: "Gopal", role: "user" },
];

console.log(
  users.reduce((acc, user) => {
    if (!acc[user.role]) acc[user.role] = [];
    acc[user.role].push(user.name);
    return acc;
  }, {}),
);
