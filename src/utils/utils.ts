/**
 * removes the first two string characters from the url
 *
 * @param url the url from the contentful response
 * @returns a url
 */
export const parseContentfulImageUrl = (url: string): string => {
    return 'https://' + url.substring(2)
}

/**
 * maintenance alert
 */
export const maintenanceAlert = (): void => {
    alert("I'm currently building this right now! Check back on another day!")
}

/**
 * A debounce function that is used to make the debounce calls
 *
 * @param fn function to call
 * @param ms time in ms to debounce the function
 * @returns a the function wrapped inside a debounce function
 */
export const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}
