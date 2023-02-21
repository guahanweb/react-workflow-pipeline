import { areEmptyArrays, areEmptyObjects } from "../../../../utils";

export const defaultComparator = (): false => false;

export function areSelectorDepsEqual<T>(
    currentDeps: T[],
    nextDeps: T[]
): boolean {
    if (currentDeps.length !== nextDeps.length) {
        return false;
    }

    return currentDeps.every((currentDep, index) => {
        const nextDep = nextDeps[index];

        if (areEmptyArrays(currentDep, nextDep) || areEmptyObjects(currentDep, nextDep)) {
            return true;
        }

        return currentDep === nextDep;
    })
}
