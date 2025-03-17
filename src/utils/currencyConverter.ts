/*
* Convert to BRL currency format
* @param value - number to be converted
* @returns Converter BRL string
*/

export function currencyConverter(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}