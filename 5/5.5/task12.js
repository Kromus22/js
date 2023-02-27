let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

const unique = (arr) => {
  return strings = [... new Set(arr)];
}

unique(strings);
console.log(strings);