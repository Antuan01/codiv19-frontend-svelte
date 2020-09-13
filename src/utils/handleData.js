import { isYesterdayDate, isDateEqual } from './date'
export const countryInfoWithTotalCases = (dataByCase) => dataByCase.reduce(maxCases, { Cases: 0 })

const maxCases = (acc, dayData) => {
    // if (!dayData && dayData.Date) return acc;
    if (isYesterdayDate(dayData.Date)) {
        return {
            ...dayData,
            Cases: acc.Cases + dayData.Cases
        }
    }
    if (isDateEqual(dayData.Date, "2020-09-01T00:00:00Z")) {
        return {
            ...acc,
            Cases: acc.Cases - dayData.Cases
        }
    }
    return acc
}

