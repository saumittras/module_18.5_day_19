/**
3. Checking Array Membership with ‘includes’
Instructions:

  1.Create an array of books containing different book.

  2.Use the includes method to check if the array contains a javascript book.

  3.Print a message to the console indicating whether the element is present in the array or not.
 */

const books = [
  "Python",
  "JavaScript",
  "Programming C",
  "Physics",
  "Mathematics",
];

let bookName = "JavaScript";

console.log(books.includes(bookName));

if (books.includes(bookName)) {
  console.log(bookName + " is in the Array");
} else {
  console.log(bookName + " is not in the Array");
}
