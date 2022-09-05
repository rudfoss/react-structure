/**
 * Aysnc function for delaying things. Await it to resume a function later.
 * @param ms
 * @returns
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
