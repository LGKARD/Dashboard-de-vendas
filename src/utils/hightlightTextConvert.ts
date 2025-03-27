/*
* Convert text from highlight api
* @param text - text to be converted
* @returns Converter text
*/

export function hightlightTextConvert(text: string): string {
    switch (text) {
        case 'alert':
            return'* Meta longe de ser batida'
        case 'success':
            return'* A meta do mês foi batida! Parabéns'
        case 'warning':
            return'* Falta pouco, vamos lá!'
        default:
            return'*Sem dados no momento'
    }
        
}