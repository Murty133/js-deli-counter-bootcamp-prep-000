function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length}.`
}

function nowServing(line) {
  if (line.length === 0){
    return "There is noby waiting to be served!"
  }
  else {
    return line.pop()
  }
}