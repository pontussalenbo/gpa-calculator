export function warning(condition, message): void {
    if (process.env.NODE_ENV === 'production' || condition) {
        return;
    }

    console.warn('useValidation: ' + message);
}
export function invariant(condition, message): void {
    if (process.env.NODE_ENV === 'production' || condition) {
        return;
    }

    throw new Error('useValidation: ' + message);
}
