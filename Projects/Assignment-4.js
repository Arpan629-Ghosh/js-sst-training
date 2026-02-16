const now = new Date();

console.log(now.getFullYear());

const interviewDate = new Date("2026-03-01");
if (interviewDate > now) {
  console.log("Yes");
}

console.log(now.getDate() + 7);
