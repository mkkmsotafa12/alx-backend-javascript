#!/usr/bin/node

const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const lines = data
      .split('\n')
      .filter((line) => line.length > 0)
      .slice(1);
    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    }
    console.log(`Number of students: ${lines.length}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field].join(', ');
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${list}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
