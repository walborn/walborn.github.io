// export const declOfNum = (n: number, titles: [string, string, string]) => {  
//   const cases = [2, 0, 1, 1, 1, 2]
//   return titles[ (n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 0] ]
// }

export const declOfNum = (n: number, titles: [string, string, string]): string =>{
  if (n % 10 === 1 && n % 100 !== 11) return titles[0]
  if (n % 10 > 1 && n % 10 < 5 && (n % 100 < 10 || n % 100 > 19)) return titles[1]
  return titles[2]
}
// declOfNum(count, ['найдена', 'найдено', 'найдены'])
// declOfNum(count, ['рубль', 'рубля', 'рублей']);
export const diffMonths = (from: Date, to: Date) =>
  (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())


export const formatDuration = (months: number) => {
  const res = []
  if (months > 11) {
    const yrs = months / 12 | 0
    res.push(`${yrs} ${declOfNum(yrs, [ 'год', 'года', 'лет' ])}`)
  }
  if (months % 12) {
    const mon = months % 12
    res.push(`${mon} ${declOfNum(mon, [ 'месяц', 'месяца', 'месяцев' ])}`)
  }
  return res.join(' ')
}