const fakeDB = [
  {
    id: 1,
    emailId: "arpan@gmail.com",
    password: "arpan@123",
  },
  {
    id: 2,
    emailId: "pritam@gmail.com",
    password: "pritam@987",
  },
];

const loginUser = (emailId, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeDB.find((it) => it.emailId === emailId);

      if (!user) {
        return reject(new Error("User not found"));
      }

      if (user.password !== password) {
        return reject(new Error("Invalid Password"));
      }

      const { password: _, ...safeUser } = user;
      resolve(safeUser);
    }, 2000);
  });
};

const handleLoginUser = async () => {
  try {
    console.log("logging in...");
    const data = await loginUser("arpan@gmail.com", "arpan@123");
    console.log("Login successfully", data);
  } catch (error) {
    console.log("Login failed", error.message);
  }
};

handleLoginUser();
