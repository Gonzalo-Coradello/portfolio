const EXPERIENCE_START = new Date(2022, 3, 1)

const formatYears = years =>
  Number.isInteger(years) ? String(years) : years.toFixed(1)

export const getYearsOfExperience = (now = new Date()) => {
  const months =
    (now.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 +
    (now.getMonth() - EXPERIENCE_START.getMonth()) -
    (now.getDate() < EXPERIENCE_START.getDate() ? 1 : 0)

  const roundedToHalfYear = Math.round((months / 12) * 2) / 2

  return formatYears(Math.max(roundedToHalfYear, 0))
}
