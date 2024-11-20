export function getDataOrNull<T>(results: T[]): T | null {
    return results.length > 0 ? results[0] : null;
}