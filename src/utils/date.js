import { compose } from './functions'
//utils 
const toDateObj = (dateable) => new Date(dateable)
const getMonth = (dateObject) => dateObject.getUTCMonth() + 1
const getYear = (dateObject) => dateObject.getUTCFullYear()
const getDate = (dateObject) => dateObject.getUTCDate()

const nowMonth = () => getMonth(now())

const addCeroToDate = (num) => num < 10 ? `0${num}` : num

//exports
export const now = () => toDateObj(Date.now())

export const currentMonth = compose(
    nowMonth,
    addCeroToDate
)

export const currentDay = compose(
    now,
    getDate,
    addCeroToDate
)

export const currentYear = compose(
    now,
    getYear
)

export const day = compose(
    toDateObj,
    getDate
)

export const month = compose(
    toDateObj,
    getMonth
)

export const year = compose(
    toDateObj,
    getYear
)

export const isYesterdayDate = (date) => (
    currentYear() === year(date) &&
    parseInt(currentMonth()) === month(date) &&
    (currentDay() - 1) === day(date)
)

export const isDateEqual = (date, date2) => (
    year(date) === year(date2) &&
    month(date) === month(date2) &&
    day(date) === day(date2)
)

