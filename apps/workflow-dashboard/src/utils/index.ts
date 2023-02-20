export function isObject(value: unknown): value is object {
    return value != null && !Array.isArray(value) && typeof value === 'object';
}

export function isString(value: unknown): value is string {
    return (
        typeof value === 'string' ||
        (typeof value === 'object' &&
            Object.prototype.toString.call(value) === '[object String]')
    );
}

export function isMap(value: unknown): value is Map<unknown, unknown> {
    return (
        isObject(value) && Object.prototype.toString.call(value) === '[object Map]'
    );
}

export function isSet<T>(value: unknown): value is Set<T> {
    return (
        isObject(value) && Object.prototype.toString.call(value) === '[object Set]'
    );
}

export function isEmpty<T>(value: T): boolean {
    if (value === null || value === undefined) return true;

    if (isObject(value) && (isMap(value) || isSet(value))) {
        return !value.size;
    }
    if (isObject(value) && (isString(value) || Array.isArray(value))) {
        return !value.length;
    }
    for (const key in value) {
        if (has(value, key)) {
            return false;
        }
    }
    return true;
}

function isEmptyArray<T>(value: T): boolean {
    return Array.isArray(value) && isEmpty(value);
}

export function areEmptyArrays<T>(...values: T[]): boolean {
    return values.every(isEmptyArray);
}

function isEmptyObject<T>(value: T): boolean {
    return isObject(value) && isEmpty(value);
}

export function areEmptyObjects<T>(...values: T[]): boolean {
    return values.every(isEmptyObject);
}

export function has(object: unknown, key: string): boolean {
    return object != null && Object.prototype.hasOwnProperty.call(object, key);
}
