const friends = ["Balam", "Kalam", "Salam", "gelam", "Pailam"];
console.log(friends.includes("gelam"));
console.log(friends.includes("khailam"));

if (friends.includes("Salam")) {
  console.log("party");
} else {
  console.log("no food. we are fasting");
}
