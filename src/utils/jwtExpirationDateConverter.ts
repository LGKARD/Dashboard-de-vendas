/*
* Convert JWT exp in days
* @param exp - Number to be converted
* @returns Converted exp in days
*/

export function jwtExpirationDateConverter(exp: number): number {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const secondsUntilExpiration = exp - currentTime;
    const secondsInDay = 24 * 60 * 60; // Number of seconds in a day
    const daysUntilExpiration = secondsUntilExpiration / secondsInDay;
    return daysUntilExpiration
}