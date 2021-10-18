const { readLine, readStopWords } = require("./utils");

const pattern = /[^A-Za-z]+/
const template = "Number of words: "

const filteredUserInput = (userInput, stopWordsArr) => {
  const strArr = userInput.split(pattern)
  const filteredStrArr = strArr.filter(str => {
      if (str !== "" && !stopWordsArr.includes(str)) return true
      return false
  })

  return filteredStrArr
}

const wordCount = async () => {
  const userInput = await readLine("Enter text:")
  const stopWordsArr = await readStopWords()
  return filteredUserInput(userInput, stopWordsArr)
}


wordCount()

module.exports = { filteredUserInput }