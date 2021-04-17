export const setTime = (counter) => {
  const min = Math.floor(counter / 60)
  const sec = counter % 60 > 9 ? counter % 60 : `0${counter % 60}`

  return { min, sec }
}
