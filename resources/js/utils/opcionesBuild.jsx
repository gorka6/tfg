import { normTexto } from "./normTexto";

export function opcionesBuild(items, translateGroup) {
    return items.map(item => {
        const key = normTexto(item.name);
        const translated = translateGroup[key];
        return { value: item.id, label: translated };
    });
}
