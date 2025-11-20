export function filtraOpciones(items, field, value) {
    if (!value) return [];
    return items.filter(item => Number(item[field]) === Number(value));
}
