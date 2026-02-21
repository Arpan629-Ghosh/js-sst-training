function ageProcessing(data) {
  const aboveEightteen = data.filter((userAge) => {
    const ageInNumber = Number(userAge.age);
    return !isNaN(ageInNumber) && ageInNumber >= 18;
  });

  console.log("Above 18: ", aboveEightteen);

  const invalidAges = data.filter((user) => {
    const ageInNumber = Number(user.age);
    return user.age === "" || isNaN(ageInNumber);
  });

  console.log("Invalid Ages : ", invalidAges);

  const validAges = data
    .map((user) => Number(user.age))
    .filter((age) => age && !isNaN(age));

  const validAgeSum = validAges.reduce((acc, sum) => (acc += sum), 0);
  const validAvgAges = validAgeSum / validAges.length;

  console.log(validAvgAges);
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

ageProcessing(users);
