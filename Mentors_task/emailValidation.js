function validateEmail(data) {
  const RegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validUsers = [];
  const invalidUsers = [];

  data.forEach((user) => {
    const correctedEmail = user.email.trim().toLowerCase();
    if (RegEx.test(correctedEmail)) {
      validUsers.push({ ...user, correctEmail: correctedEmail });
    } else {
      invalidUsers.push({ ...user, incorrectEmail: correctedEmail });
    }
  });

  return {
    validUsers,
    invalidUsers,
    validCnt: validUsers.length,
    invalidCnt: invalidUsers.length,
  };
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

const emailReport = validateEmail(users);
console.log(emailReport);
