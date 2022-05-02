const fs = require("fs").promises;

const readLines = async () => {
  const data = await fs.readFile("./input.txt", { encoding: "utf-8" });
  return data.split("\n");
};

const solve = async () => {
  const lines = await readLines();
  let colIndex = 0;
  const width = lines[0].length;
  let treeCount = 0;
  for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
    if (lines[rowIndex][colIndex % width] === "#") {
      treeCount++;
    }
    colIndex += 3;
  }
  return treeCount;
};

solve().then(console.log); // 167
