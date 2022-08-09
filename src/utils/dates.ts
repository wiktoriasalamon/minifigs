export const getYesterdayDate = (): Date => {
  const day = new Date() // today
  day.setDate(day.getDate() - 1) // yesterday

  return day
}
