const { readLine } = require("./utils");

const pattern = /[^A-Za-z]+/
const template = "Number of words: "

readLine("Enter text:")
  .then(userInput => {
    const strArr = userInput.split(pattern)
    const filteredStrArr = strArr.filter(str => str !== "")
    console.log(template + filteredStrArr.length)
  })