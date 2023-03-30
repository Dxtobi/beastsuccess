

/**
 * @param {string | number | Date} strDate
 */
export default function dateCleaner(strDate) {

    const strD = new Date(strDate);

    const minutes = strD.getMinutes()
    const hours = strD.getHours()

    return `${hours}:${minutes}`

    
}