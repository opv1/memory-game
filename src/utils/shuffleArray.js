const getRandomInit = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const shuffleArray = (array) => {
  const result = []

  while (array.length > 0) {
    let random = getRandomInit(0, array.length - 1)
    let element = array.splice(random, 1)[0]

    result.push(element)
  }

  return result
}
