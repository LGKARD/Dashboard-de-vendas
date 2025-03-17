import Cookies from "js-cookie";

export function logout() {
    if(confirm('Deseja realmente sair?')) {
        Cookies.remove('Authorization')
        window.location.href = '/'
    }
}