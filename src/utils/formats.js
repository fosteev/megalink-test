export function currencyString(v, prefix = '$') {
    if (Number(v) === 0) {
        return '$ 0.00';
    }
    return `${prefix} ${String(v).replace(/.{3}$/,',$&')}.00`
}
