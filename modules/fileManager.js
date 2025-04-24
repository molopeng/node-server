const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/db.json');

// Auto create file if it doesn’t exist
function initializeFile() {
  if (!fs.existsSync(filePath)) {
    const defaultData = {
      movies: [],
      series: [],
      songs: []
    };
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
  }
}

// Read all data
function readData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Write updated data
function writeData(newData) {
  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
}

module.exports = {
  initializeFile,
  readData,
  writeData
};
