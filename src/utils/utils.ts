export function warning(condition: boolean, message: string): void {
    if (process.env.NODE_ENV === 'production' || condition) {
        return;
    }

    console.warn(`useValidation: ${message}`);
}
export function invariant(condition: boolean, message: string): void {
    if (process.env.NODE_ENV === 'production' || condition) {
        return;
    }

    throw new Error(`useValidation: ${message}`);
}
