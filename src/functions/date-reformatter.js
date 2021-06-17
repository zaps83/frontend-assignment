const months = {
    '01': 'January',
    '02': 'Febuary',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

export const dateReformatter = (date) => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    let day = date.slice(8, 10)
    if (day[0] === '0') day = day[1]
    return `${months[month]} ${day}, ${year}`
}