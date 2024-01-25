/**
 * removes the first two string characters from the url
 *
 * @param url the url from the contentful response
 * @returns a url
 */
export const parseContentfulImageUrl = (url: string): string => {
    return 'https://' + url.substring(2)
}

export const maintenanceAlert = (): void => {
    alert("I'm currently building this right now! Check back on another day!")
}
