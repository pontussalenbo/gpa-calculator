import type {
    Dispatch,
    SetStateAction
} from 'react';
import {
    useCallback,
    useEffect,
    useState,
} from 'react'

declare global {
    interface WindowEventMap {
        'local-storage': CustomEvent
    }
}

type SetValue<T> = Dispatch<SetStateAction<T>>

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : (JSON.parse(value ?? '') as T)
    } catch {
        console.log('parsing error on', { value })
        return undefined
    }
}
/*
function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = useCallback((): T => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === 'undefined') {
            return initialValue
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? (parseJSON(item) as T) : initialValue
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error)
            return initialValue
        }
    }, [initialValue, key])

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(readValue)

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue: SetValue<T> = useCallback(value => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === 'undefined') {
            console.warn(
                `Tried setting localStorage key “${key}” even though environment is not a client`,
            )
        }

        try {
            // Allow value to be a function so we have the same API as useState
            const myNewValue = value instanceof Function ? value(storedValue) : value

            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(myNewValue))

            // Save state
            setStoredValue(myNewValue)

            // We dispatch a custom event so every useLocalStorage hook are notified
            window.dispatchEvent(new Event('local-storage'))
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error)
        }
    }, [key, storedValue])

    useEffect(() => {
        setStoredValue(readValue())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleStorageChange = useCallback(
        (event: CustomEvent | StorageEvent) => {
            if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
                return
            }
            setStoredValue(readValue())
        },
        [key, readValue],
    )

    // this only works for other documents, not the current one
    // useEventListener('storage', handleStorageChange)

    // this is a custom event, triggered in writeValueToLocalStorage
    // See: useLocalStorage()
    // useEventListener('local-storage', handleStorageChange)

    return [storedValue, setValue]
}
*/
export default useLocalStorage;


function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? (parseJSON<T>(item) as T) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: T | ((arg: T) => T)): void => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
            const event = new CustomEvent<T>('local-storage', { detail: storedValue });
            window.dispatchEvent(event);
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}