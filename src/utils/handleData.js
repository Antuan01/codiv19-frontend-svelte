import { isYesterdayDate, isDateEqual } from './date'
export const totalByCasesInDate = (dataByCase) => dataByCase.reduce(maxCases, 0)

const maxCases = (acc, dayData) => {
    if (!dayData && dayData.Date) return acc;
    if (isYesterdayDate(dayData.Date)) {
        return acc + dayData.Cases
    }
    if (isDateEqual(dayData.Date, "2020-09-01T00:00:00Z")) {
        return acc - dayData.Cases
    }
    return acc
}

