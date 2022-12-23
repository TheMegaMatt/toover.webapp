export function createQueryString(data: Record<string, string | number | boolean>) {
    const qs = new URLSearchParams();
    for (const key in data) {
        const filter = data[key];
        if (typeof filter == 'number' || typeof filter == 'boolean') {
            qs.set(key, filter.toString());
            continue
        }
        qs.set(key, filter);
    }
    return qs.toString();
}
