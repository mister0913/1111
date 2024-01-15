const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const truncated_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function getFormattedTodayDate(truncated?: boolean) {
  const today = new Date()
  return getFormattedDayMonth(today, truncated)
}

export function getFormattedDayMonth(date: Date, truncated?: boolean) {
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const monthName = truncated ? truncated_months[monthIndex] : months[monthIndex]

  return `${day} ${monthName}`
}

export function getFormattedDate(date: Date, truncated?: boolean) {
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const monthName = truncated ? truncated_months[monthIndex] : months[monthIndex]

  return `${day} ${monthName}, ${year}`
}

export function getShortFormattedDate(date: Date, truncated?: boolean) {
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const monthName = truncated ? truncated_months[monthIndex] : months[monthIndex]

  return `${day} ${monthName}`
}

export function getFormattedMonth(date: Date, truncated?: boolean) {
  const monthIndex = date.getMonth()
  return truncated ? truncated_months[monthIndex] : months[monthIndex]
}

export function getFormattedDay(date: Date) {
  return date.getDate()
}

export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}
