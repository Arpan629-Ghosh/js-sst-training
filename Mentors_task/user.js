function cleanUserData(data) {
  return data.map((user) => {
    const cleanName = user.name
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const cleanEmail = user.email.trim().toLowerCase();

    const trimCity = user.city.trim();
    const cleanCity =
      trimCity.charAt(0).toUpperCase() + trimCity.slice(1).toLowerCase();

    const cleanAge = Number(user.age);

    return {
      ...user,
      name: cleanName,
      email: cleanEmail,
      city: cleanCity,
      age: isNaN(cleanAge) ? user.age : cleanAge,
    };
  });
}

function validateEmail(data) {
  const RegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validUsers = [];
  const invalidUsers = [];

  data.forEach((user) => {
    if (RegEx.test(user.email)) {
      validUsers.push(user);
    } else {
      invalidUsers.push(user);
    }
  });

  return {
    validUsers,
    invalidUsers,
    validCnt: validUsers.length,
    invalidCnt: invalidUsers.length,
  };
}

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

function userNameGenarator(data) {
  return data.map((user) => {
    const firstName = user.name.trim().split(" ")[0].toLowerCase();

    const idLastTwo = String(user.id).slice(-2);

    return {
      ...user,
      userName: firstName + idLastTwo,
    };
  });
}

function cityReport(data) {
  return data.reduce((acc, user) => {
    const city = user.city.trim().toLowerCase();
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});
}

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

// const cleanedUsers = cleanUserData(users);
// console.log(cleanedUsers);
// const emailReport = validateEmail(users);
// console.log(emailReport);

// ageProcessing(users);
// console.log(userNameGenarator(users));

// console.log(cityReport(users));
console.log(searchUser(users, "pri"));

// const str = "  Arpan Ghosh  ";
// const result = str.trim().split(" ")[0];
// console.log(result);
