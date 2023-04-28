type Callback<T> = (element: T, i: number, j: number) => boolean | undefined | null | void

export function forEach<T>(arr: T[][], callback: Callback<T>): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const result = callback(arr[i][j], i, j)
            if (result) {
                return
            }
        }
    }
}

export function createArray<T>(size: number, filler: T): T[] {
    return Array(size).fill(filler)
}

export function createArray2D<T>(size: number, filler: T): T[][] {
    const array = createArray(size, filler)
    return array.map(() => createArray(size, filler))
}