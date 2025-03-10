/*
* Convert Pixels to Rem
* @param pixels - Pixels value to be converted
* @returns Rem value
*/

export function pxToRem(pixels: number): string {
    return `${pixels / 16}rem`
}