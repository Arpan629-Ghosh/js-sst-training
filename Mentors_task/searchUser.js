function searchUser(data, keyword) {
  if (!keyword) return data;

  const regEx = new RegExp(keyword.trim(), "i");

  return data.filter(
    (user) =>
      regEx.test(user.name.trim()) ||
      regEx.test(user.city.trim()) ||
      regEx.test(user.email.trim()),
  );
}

const users = [
  {
    id: 101,
    name: "  arpan  ghosh  ",
    email: "ARPAN@GMAIL.COM ",
    age: "21",
    city: " kolkata ",
  },
  {
    id: 102,
    name: "raM  kumar",
    email: "ram.kumar@EMAIL.com",
    age: "17",
    city: "Delhi",
  },
  {
    id: 103,
    name: "sara  ali",
    email: "saraAli#gmail.com",
    age: "twenty",
    city: "mumbai",
  },
  {
    id: 104,
    name: "john   doe",
    email: " JOHN.DOE@YAHOO.COM",
    age: "25",
    city: "Chennai",
  },
  {
    id: 105,
    name: "   priya  sharma ",
    email: "priya.sharma@gmailcom",
    age: "",
    city: "delhi ",
  },
];

console.log(searchUser(users, "pri"));
