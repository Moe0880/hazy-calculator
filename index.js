function exclude(value) {
  if (value === '') {
    return false
  }

  return (
    (!isNaN(value) ||
      value === '+' ||
      value === '-' ||
      value === '*' ||
      value === '/') &&
    value !== undefined
  )
}

function calculate(calculateSteps) {
  let result

  calculateSteps = calculateSteps.filter(exclude)

  for (let i = 1; i < calculateSteps.length; i++) {
    switch (calculateSteps[i]) {
      case '*':
        return calculateSteps[i - 1] * calculateSteps[i + 1]

      case '+':
        return calculateSteps[i - 1] + calculateSteps[i + 1]

      case '-':
        return calculateSteps[i - 1] - calculateSteps[i + 1]

      case '/':
        return calculateSteps[i - 1] / calculateSteps[i + 1]

      default:
        return NaN
    }
  }

  return result
}

module.exports = calculate
