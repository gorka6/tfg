import { normTexto } from "./normTexto";

export function opcionesBuild(items, translateGroup, t) {
    return items.map(item => {
        const key = normTexto(item.name);
        const translated = translateGroup[key] ?? item.name;
        return { value: item.id, label: translated };
    });
}
