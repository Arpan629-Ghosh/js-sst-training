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

const cleanedUsers = cleanUserData(users);
console.log(cleanedUsers);
