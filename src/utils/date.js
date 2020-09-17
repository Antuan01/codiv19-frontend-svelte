import { compose } from './functions'
import moment from 'moment';
//utils 
const toMoment = (dateable) => moment.utc(moment.utc(dateable).format("YYYY-MM-DD"))
const getMonth = (momentObj) => momentObj.month() + 1
const getYear = (momentObj) => momentObj.year()
const getDate = (momentObj) => momentObj.date()

const nowMonth = () => getMonth(now())

const addCeroToDate = (num) => num < 10 ? `0${num}` : num

const now = () => moment(moment().format("YYYY-MM-DD"))

const currentYear = compose(
    now,
    getYear
)

const day = compose(
    toMoment,
    getDate
)

const month = compose(
    toMoment,
    getMonth
)

const year = compose(
    toMoment,
    getYear
)

//exports

export const currentMonth = compose(
    nowMonth,
    addCeroToDate
)

export const currentDay = compose(
    now,
    getDate,
    addCeroToDate
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

