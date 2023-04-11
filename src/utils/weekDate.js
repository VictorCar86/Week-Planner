export const monthNames = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
};

export const weekNames = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
};

export const weekDatesUS = {
    sunday: 1,
    monday: 2,
    tuesday: 3,
    wednesday: 4,
    thursday: 5,
    friday: 6,
    saturday: 7,
};

export const weekDatesES = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
};

export function daysFromMonth(month = ''){
    if (typeof month !== 'string'){
        throw new Error('It is necessary to introduce only strings');
    }

    const numberOfMonth = monthNames[month.toLowerCase()];

    if (numberOfMonth === undefined){
        throw new Error('The introduced month does not exist');
    }

    const datesArray = [];

    for(let i = 1;; i++) {
        const date = new Date(2023, numberOfMonth, i);

        if (date.getMonth() > numberOfMonth){
            break;
        }

        datesArray.push(date);
    }

    return datesArray;
}