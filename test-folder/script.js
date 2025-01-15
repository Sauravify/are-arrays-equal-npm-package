const areArraysEqual = require("are-arrays-equal");

const array1 = [
  {
    id: 1,
    name: "John Doe",
    address: {
      city: "New York",
      zipcode: "10001",
    },
    preferences: ["sports", "movies"],
  },
  {
    id: 2,
    name: "Jane Smith",
    address: {
      city: "Los Angeles",
      zipcode: "90001",
    },
    preferences: ["books", "travel"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    address: {
      city: "Chicago",
      zipcode: "60601",
    },
    preferences: ["music", "art"],
  },
];

const array2 = [
  {
    id: 1,
    name: "John Doe",
    address: {
      city: "New York",
      zipcode: "10001",
    },
    preferences: ["sports", "movies"],
  },
  {
    id: 2,
    name: "Jane Smith",
    address: {
      city: "Los Angeles",
      zipcode: "90001",
    },
    preferences: ["books", "travel"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    address: {
      city: "Chicago",
      zipcode: "60601",
    },
    preferences: ["music", "art"],
  },
];

console.log(areArraysEqual(array1, array2));
